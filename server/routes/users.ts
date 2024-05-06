import express from "express";
const router = express.Router();

import {
    updateUser,
    getAllUsers,
    getUserById,
    deleteUser
  } from "../controllers/users";

  router.route("/:userId").put(updateUser);
  router.route("/").get(getAllUsers);
  router.route("/:userId").get(getUserById);
  router.route("/:userId").delete(deleteUser);
  



  export default router;