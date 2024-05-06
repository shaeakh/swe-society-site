"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const generalNotice_1 = require("../controllers/generalNotice");
router.route("/create").post(generalNotice_1.createNotice);
router.route("/:noticeId").get(generalNotice_1.getNoticeById);
router.route("/").get(generalNotice_1.getAllNotices);
router.route("/:noticeId").put(generalNotice_1.updateNotice);
router.route("/:noticeId").delete(generalNotice_1.deleteNotice);
exports.default = router;
