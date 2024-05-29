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
exports.getEventById = exports.deleteEvent = exports.updateEvent = exports.getAllEvents = exports.createEvent = void 0;
const errorWrapper_1 = __importDefault(require("../middlewares/errorWrapper"));
const CustomError_1 = __importDefault(require("../services/CustomError"));
const dbconnect_1 = __importDefault(require("../db/dbconnect"));
const createEvent = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { event_creator, start_time, end_time, headline, event_details, coverphoto } = req.body;
    const { rows } = yield dbconnect_1.default.query('INSERT INTO Events (event_creator, start_time, end_time, headline, event_details, coverphoto) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [event_creator, start_time, end_time, headline, event_details, coverphoto]);
    res.status(201).json(rows[0]);
}), { statusCode: 500, message: `Couldn't create event` });
exports.createEvent = createEvent;
const getAllEvents = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Events');
    res.json(rows);
}), { statusCode: 500, message: `Couldn't get events` });
exports.getAllEvents = getAllEvents;
const updateEvent = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventid } = req.params;
    const { event_creator, start_time, end_time, headline, event_details, coverphoto } = req.body;
    const { rows } = yield dbconnect_1.default.query('UPDATE Events SET event_creator = $1, start_time = $2, end_time = $3, headline = $4, event_details = $5, coverphoto = $6 WHERE eventid = $7 RETURNING *', [event_creator, start_time, end_time, headline, event_details, coverphoto, eventid]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Event not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't update event` });
exports.updateEvent = updateEvent;
const getEventById = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventid } = req.params;
    const { rows } = yield dbconnect_1.default.query('SELECT * FROM Events WHERE eventid = $1', [eventid]);
    if (rows.length === 0) {
        throw new CustomError_1.default('Event not found', 404);
    }
    res.json(rows[0]);
}), { statusCode: 500, message: `Couldn't get event by eventid` });
exports.getEventById = getEventById;
const deleteEvent = (0, errorWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventid } = req.params;
    const { rowCount } = yield dbconnect_1.default.query('DELETE FROM Events WHERE eventid = $1', [eventid]);
    if (rowCount === 0) {
        throw new CustomError_1.default('Event not found', 404);
    }
    res.json({ message: 'Event deleted successfully' });
}), { statusCode: 500, message: `Couldn't delete event` });
exports.deleteEvent = deleteEvent;
