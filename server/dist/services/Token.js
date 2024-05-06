"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidateToken = exports.getToken = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CustomError_1 = __importDefault(require("./CustomError"));
const tokenBlacklist = new Set();
const getToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }
    return authHeader.split(" ")[1];
};
exports.getToken = getToken;
const generateToken = (info, expiry) => {
    const secret = "societyJwtKey";
    if (!secret) {
        throw new CustomError_1.default("JWT secret is undefined.", 500);
    }
    return jsonwebtoken_1.default.sign(info, secret, { expiresIn: expiry });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT secret is undefined.");
    }
    if (tokenBlacklist.has(token)) {
        throw new CustomError_1.default("User is logged out!", 401);
    }
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.verifyToken = verifyToken;
const invalidateToken = (token) => {
    tokenBlacklist.add(token);
    return;
};
exports.invalidateToken = invalidateToken;
