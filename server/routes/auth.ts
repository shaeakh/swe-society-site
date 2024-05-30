import express from "express";
const router = express.Router();

import {
    createUser,
    login,
    createUserWithMailSend,
    createMultiUsersWithMailSend,
    updateUserPassword
  } from "../controllers/auth";

  router.route("/create").post(createUser);
  router.route("/createbymailing").post(createUserWithMailSend);
  router.route("/multiUserCreate").post(createMultiUsersWithMailSend);
  router.route("/updatePassword").post(updateUserPassword);
  router.route("/login").post(login);
  



  export default router;