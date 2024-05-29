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
exports.deleteEventUpdate = exports.updateEventUpdate = exports.getEventUpdateById = exports.getAllEventUpdates = exports.createEventUpdates = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
// Existing event handlers remain unchanged
// ...
const createEventUpdates = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventid, caption, photos } = req.body;
    // Ensure photos are stored as an array
    const photosArray = photos instanceof Array ? photos : [photos];
    const { rows } = yield dbconnect_1.default.query('INSERT INTO Event_Updates (eventid, caption, photos) VALUES ($1, $2, $3) RETURNING *', [eventid, caption, photosArray]);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create event update` });
exports.createEventUpdates = createEventUpdates;
const getAllEventUpdates = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Event_Updates');
    res.json(rows);
}), { statusCode: 500, message: `Couldn't get event updates` });
exports.getAllEventUpdates = getAllEventUpdates;
const getEventUpdateById = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { event_updateid } = req.params;
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Event_Updates WHERE event_updateid = $1', [event_updateid]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Event update not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't get event update by event_updateid` });
exports.getEventUpdateById = getEventUpdateById;
const updateEventUpdate = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventid } = req.params;
    const { event_creator, start_time, end_time, headline, event_details, coverphoto } = req.body;
    const { rows } = yield dbconnect_1.default.query('UPDATE Events SET event_creator = $1, start_time = $2, end_time = $3, headline = $4, event_details = $5, coverphoto = $6 WHERE eventid = $7 RETURNING *', [event_creator, start_time, end_time, headline, event_details, coverphoto, eventid]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Event not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't update event` });
exports.updateEventUpdate = updateEventUpdate;
const deleteEventUpdate = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { event_updateid } = req.params;
    const { rowCount } = yield dbconnect_1.default.query('DELETE FROM Event_Updates WHERE event_updateid = $1', [event_updateid]);
    if (rowCount === 0) {
        throw new CustomError_1.default('Event update not found', 404);
    }
    res.json({ message: 'Event update deleted successfully' });
}), { statusCode: 500, message: `Couldn't delete event update` });
exports.deleteEventUpdate = deleteEventUpdate;
