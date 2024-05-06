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
const CustomError_1 = __importDefault(require("../services/CustomError"));
const errorWrapper = (fn, errorInfo) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fn(req, res, next);
        }
        catch (error) {
            // Add type annotation here
            console.log(error);
            if (error instanceof CustomError_1.default) {
                const statusCode = (error === null || error === void 0 ? void 0 : error.statusCode) || 500;
                const message = (error === null || error === void 0 ? void 0 : error.message) || "Something went wrong";
                res.status(statusCode).json({ message });
            }
            else if (errorInfo) {
                const statusCode = errorInfo.statusCode;
                const message = errorInfo.message;
                res.status(statusCode).json({ message, details: error.message });
            }
            else
                res.status(500).json({ message: "Something went wrong" });
        }
    });
};
exports.default = errorWrapper;
