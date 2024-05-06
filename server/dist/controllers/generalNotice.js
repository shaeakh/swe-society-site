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
exports.getNoticeById = exports.deleteNotice = exports.updateNotice = exports.getAllNotices = exports.createNotice = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
const createNotice = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notice_provider, notice_date, expire_date, headline, notice_body, picture, file } = req.body;
    const { rows } = yield dbconnect_1.default.query('INSERT INTO GeneralNotices (notice_provider, notice_date, expire_date, headline, notice_body, picture, file) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [notice_provider, notice_date, expire_date, headline, notice_body, picture, file]);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create notice` });
exports.createNotice = createNotice;
const getAllNotices = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM GeneralNotices');
    res.json(rows);
}), { statusCode: 500, message: `Couldn't get notices` });
exports.getAllNotices = getAllNotices;
const updateNotice = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noticeId } = req.params;
    const { notice_provider, notice_date, expire_date, headline, notice_body, picture, file } = req.body;
    const { rows } = yield dbconnect_1.default.query('UPDATE GeneralNotices SET notice_provider = $1, notice_date = $2, expire_date = $3, headline = $4, notice_body = $5, picture = $6, file = $7 WHERE noticeId = $8 RETURNING *', [notice_provider, notice_date, expire_date, headline, notice_body, picture, file, noticeId]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Notice not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't update notice` });
exports.updateNotice = updateNotice;
const getNoticeById = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noticeId } = req.params;
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM GeneralNotices WHERE noticeId = $1', [noticeId]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Notice not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't get notice by noticeId` });
exports.getNoticeById = getNoticeById;
const deleteNotice = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { noticeId } = req.params;
    const { rowCount } = yield dbconnect_1.default.query('DELETE FROM GeneralNotices WHERE noticeId = $1', [noticeId]);
    if (rowCount === 0) {
        throw new CustomError_1.default('Notice not found', 404);
    }
    res.json({ message: 'Notice deleted successfully' });
}), { statusCode: 500, message: `Couldn't delete notice` });
exports.deleteNotice = deleteNotice;
