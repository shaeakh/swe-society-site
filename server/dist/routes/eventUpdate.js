"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const eventUpdates_1 = require("../controllers/eventUpdates");
router.route("/create").post(eventUpdates_1.createEventUpdates);
router.route("/:event_updateid").get(eventUpdates_1.getEventUpdateById);
router.route("/").get(eventUpdates_1.getAllEventUpdates);
router.route("/:event_updateid").put(eventUpdates_1.updateEventUpdate);
router.route("/:event_updateid").delete(eventUpdates_1.deleteEventUpdate);
exports.default = router;
