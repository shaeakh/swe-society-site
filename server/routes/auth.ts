import express from "express";
const router = express.Router();

import {
    createUser
  } from "../controllers/auth";

  router.route("/create").post(createUser);


  export default router;