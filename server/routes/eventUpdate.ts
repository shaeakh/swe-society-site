import express from "express";
const router = express.Router();

import {
    createEventUpdates,
    getAllEventUpdates,
    getEventUpdateById,
    updateEventUpdate,
    deleteEventUpdate
  } from "../controllers/eventUpdates";

  router.route("/create").post(createEventUpdates);
  router.route("/:event_updateid").get(getEventUpdateById);
  router.route("/").get(getAllEventUpdates);
  router.route("/:event_updateid").put(updateEventUpdate);
  router.route("/:event_updateid").delete(deleteEventUpdate);


  export default router;