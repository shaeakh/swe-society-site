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
exports.createUser = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
const createUser = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hi boss");
    const { regno, session, email, password, role } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const { rows } = yield dbconnect_1.default.query('INSERT INTO Users (regno, session, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [regno, session, email, hashedPassword, role]);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create user` });
exports.createUser = createUser;
