import { Request, Response } from "express";
import errorWrapper from "../middlewares/errorWrapper";
import CustomError from "../services/CustomError";
import pool from "../db/dbconnect";

// Existing event handlers remain unchanged
// ...

const createEventUpdates = errorWrapper(
    async (req: Request, res: Response) => {
        const { eventid, caption, photos } = req.body;

        // Ensure photos are stored as an array
        const photosArray = photos instanceof Array ? photos : [photos];

        const { rows } = await pool.query(
            'INSERT INTO Event_Updates (eventid, caption, photos) VALUES ($1, $2, $3) RETURNING *',
            [eventid, caption, photosArray]
        );

        res.status(201).json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't create event update` }
);

const getAllEventUpdates = errorWrapper(
    async (req: Request, res: Response) => {
        const { rows } = await pool.query('SELECT * FROM Event_Updates');
        res.json(rows);
    },
    { statusCode: 500, message: `Couldn't get event updates` }
);

const getEventUpdateById = errorWrapper(
    async (req: Request, res: Response) => {
        const { event_updateid } = req.params;
        const { rows } = await pool.query('SELECT * FROM Event_Updates WHERE event_updateid = $1', [event_updateid]);

        if (rows.length === 0) {
            throw new CustomError('Event update not found', 404);
        }

        res.json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't get event update by event_updateid` }
);


const updateEventUpdate = errorWrapper(
    async (req: Request, res: Response) => {
        const { eventid } = req.params;
        const { event_creator, start_time, end_time, headline, event_details, coverphoto } = req.body;

        const { rows } = await pool.query(
            'UPDATE Events SET event_creator = $1, start_time = $2, end_time = $3, headline = $4, event_details = $5, coverphoto = $6 WHERE eventid = $7 RETURNING *',
            [event_creator, start_time, end_time, headline, event_details, coverphoto, eventid]
        );

        if (rows.length === 0) {
            throw new CustomError('Event not found', 404);
        }

        res.json(rows[0]);
    },
    { statusCode: 500, message: `Couldn't update event` }
);



const deleteEventUpdate = errorWrapper(
    async (req: Request, res: Response) => {
        const { event_updateid } = req.params;
        const { rowCount } = await pool.query('DELETE FROM Event_Updates WHERE event_updateid = $1', [event_updateid]);

        if (rowCount === 0) {
            throw new CustomError('Event update not found', 404);
        }

        res.json({ message: 'Event update deleted successfully' });
    },
    { statusCode: 500, message: `Couldn't delete event update` }
);

export {

    createEventUpdates,
    getAllEventUpdates,
    getEventUpdateById,
    updateEventUpdate,
    deleteEventUpdate
};
