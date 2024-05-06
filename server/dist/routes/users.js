"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_1 = require("../controllers/users");
router.route("/:userId").put(users_1.updateUser);
router.route("/").get(users_1.getAllUsers);
router.route("/:userId").get(users_1.getUserById);
router.route("/:userId").delete(users_1.deleteUser);
exports.default = router;
