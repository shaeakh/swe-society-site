import express from "express";
const router = express.Router();

import {
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
    getEventById
  } from "../controllers/events";

  router.route("/create").post(createEvent);
  router.route("/:eventid").get(getEventById);
  router.route("/").get(getAllEvents);
  router.route("/:eventid").put(updateEvent);
  router.route("/:eventid").delete(deleteEvent);


  export default router;