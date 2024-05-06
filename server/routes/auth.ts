import express from "express";
const router = express.Router();

import {
    createUser,
    login
  } from "../controllers/auth";

  router.route("/create").post(createUser);
  router.route("/login").post(login);


  export default router;