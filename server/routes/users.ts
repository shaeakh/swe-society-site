import express from "express";
const router = express.Router();

import {
    updateUser,
    getAllUsers,
  } from "../controllers/users";

  router.route("/:userId").put(updateUser);
  router.route("/").get(getAllUsers);
  



  export default router;