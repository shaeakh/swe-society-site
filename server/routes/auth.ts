import express from "express";
const router = express.Router();

import {
    createUser,
    login,
    createUserWithMailSend
  } from "../controllers/auth";

  router.route("/create").post(createUser);
  router.route("/createbymailing").post(createUserWithMailSend);
  router.route("/login").post(login);
  



  export default router;