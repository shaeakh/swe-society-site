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
exports.login = exports.createUser = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
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
        // console.log(roles);
        // console.log(user.roleName);
        const token = (0, Token_1.generateToken)({
            id: rows[0].id,
            role: rows[0].role,
        }, "1h");
        res.json({ user: rows[0], token });
    }
}), { statusCode: 500, message: `Login Failed` });
exports.login = login;
