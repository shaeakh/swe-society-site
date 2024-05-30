"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPassword = exports.createMultiUsersWithMailSend = exports.createUserWithMailSend = exports.login = exports.createUser = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
const mailService_1 = require("../services/mailService");
const utils_1 = require("../services/utils");
const Token_1 = require("../services/Token");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
const createUser = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { regno, session, email, password, role } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const { rows } = yield dbconnect_1.default.query('INSERT INTO Users (regno, session, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [regno, session, email, hashedPassword, role]);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create user` });
exports.createUser = createUser;
const login = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Users WHERE email = $1 ', [email]);
    if (rows.length === 0) {
        throw new CustomError_1.default("This email do not exists", 404);
    }
    else {
        // User found, return user details
        //  res.json(rows[0]);
        const isPasswordValid = yield bcrypt_1.default.compare(password, rows[0].password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        const token = (0, Token_1.generateToken)({
            id: rows[0].id,
            role: rows[0].role,
        }, "1h");
        res.json({ user: rows[0], token });
    }
}), { statusCode: 500, message: `Login Failed` });
exports.login = login;
const createUserWithMailSend = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { regno, session, email, role } = req.body;
    const password = (0, utils_1.generateRandomPassword)(8);
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const { rows } = yield dbconnect_1.default.query('INSERT INTO Users (regno, session, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [regno, session, email, hashedPassword, role]);
    (0, mailService_1.sendMail)(regno, email, `Welcome To SWE Society!`, `Your account has been created by Admin! Here are the Credentials:`, `regno: ${regno}<br>email: ${email}<br> password: ${password}<br><br>Regards,<br>SWE Society Committee`);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create user` });
exports.createUserWithMailSend = createUserWithMailSend;
const createMultiUsersWithMailSend = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = req.body;
    const failedUsers = [];
    for (const user of users) {
        const { regno, session, email } = user;
        // Check if registration number or email already exists
        const regnoExists = yield dbconnect_1.default.query('SELECT 1 FROM Users WHERE regno = $1', [regno]);
        const emailExists = yield dbconnect_1.default.query('SELECT 1 FROM Users WHERE email = $1', [email]);
        if (regnoExists.rows.length > 0) {
            failedUsers.push({ regno, email, message: 'Registration number already exists' });
            continue;
        }
        if (emailExists.rows.length > 0) {
            failedUsers.push({ regno, email, message: 'Email address already exists' });
            continue;
        }
        const password = (0, utils_1.generateRandomPassword)(8);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        try {
            const { rows } = yield dbconnect_1.default.query('INSERT INTO Users (regno, session, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [regno, session, email, hashedPassword]);
            (0, mailService_1.sendMail)(regno, email, `Welcome To SWE Society!`, `Your account has been created by Admin! Here are the Credentials:`, `regno: ${regno}<br>email: ${email}<br>password: ${password}<br><br>Regards,<br>SWE Society Committee`);
        }
        catch (error) {
            console.error(`Failed to create user with regno ${regno}:`, error);
            failedUsers.push({ regno, email, message: 'Failed to create user' });
        }
    }
    if (failedUsers.length > 0) {
        res.status(207).json({
            message: 'Some users could not be created',
            failedUsers,
        });
    }
    else {
        res.status(201).json({
            message: 'All users created successfully',
        });
    }
}), { statusCode: 500, message: `Couldn't create users` });
exports.createMultiUsersWithMailSend = createMultiUsersWithMailSend;
const updateUserPassword = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid } = req.body;
    try {
        // Find user details by userid
        const userResult = yield dbconnect_1.default.query('SELECT regno, email FROM Users WHERE userid = $1', [userid]);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { regno, email } = userResult.rows[0];
        // Generate a new password
        const newPassword = (0, utils_1.generateRandomPassword)(8);
        const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
        // Update the user's password in the database
        yield dbconnect_1.default.query('UPDATE Users SET password = $1 WHERE userid = $2 RETURNING *', [hashedPassword, userid]);
        // Send email with the new credentials
        (0, mailService_1.sendMail)(regno, email, `Your Password Has Been Updated`, `Your password has been updated by Admin. Here are your new credentials:`, `regno: ${regno}<br>email: ${email}<br>password: ${newPassword}<br><br>Regards,<br>SWE Society Committee`);
        // Return the userid in the response
        res.status(200).json({ userid });
    }
    catch (error) {
        console.error(`Failed to update password for userid ${userid}:`, error);
        res.status(500).json({ message: `Couldn't update user's password` });
    }
}), { statusCode: 500, message: `Couldn't update user's password` });
exports.updateUserPassword = updateUserPassword;
