"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const events_1 = require("../controllers/events");
router.route("/create").post(events_1.createEvent);
router.route("/:eventid").get(events_1.getEventById);
router.route("/").get(events_1.getAllEvents);
router.route("/:eventid").put(events_1.updateEvent);
router.route("/:eventid").delete(events_1.deleteEvent);
exports.default = router;
