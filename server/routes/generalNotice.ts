import express from "express";
const router = express.Router();

import {
    createNotice,
    getAllNotices,
    updateNotice,
    deleteNotice,
    getNoticeById
  } from "../controllers/generalNotice";

  router.route("/create").post(createNotice);
  router.route("/:noticeId").get(getNoticeById);
  router.route("/").get(getAllNotices);
  router.route("/:noticeId").put(updateNotice);
  router.route("/:noticeId").delete(deleteNotice);


  export default router;