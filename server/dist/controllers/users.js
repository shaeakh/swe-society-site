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
exports.getAllUsers = exports.updateUser = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
const updateUser = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const updates = req.body;
    // Construct SET clause dynamically from the updates object
    let setClause = '';
    const values = [];
    for (const key in updates) {
        if (key !== 'userId') { // Exclude userId from updates
            setClause += `${key} = $${values.length + 1}, `;
            values.push(updates[key]);
        }
    }
    // Remove trailing comma and space
    setClause = setClause.slice(0, -2);
    if (values.length === 0) {
        throw new CustomError_1.default("No fields provided for update", 404);
    }
    // Construct the SQL query
    const query = {
        text: `UPDATE Users SET ${setClause} WHERE userId = $${values.length + 1} RETURNING *`,
        values: [...values, userId]
    };
    try {
        const { rows } = yield dbconnect_1.default.query(query);
        if (rows.length === 0) {
            throw new CustomError_1.default('User not found', 404);
        }
        res.json(rows[0]);
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
}), { statusCode: 500, message: `Couldn't update user` });
exports.updateUser = updateUser;
const getAllUsers = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Users');
    res.json(rows);
}), { statusCode: 500, message: `Couldn't get notices` });
exports.getAllUsers = getAllUsers;
