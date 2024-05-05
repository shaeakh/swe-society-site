import express, { urlencoded, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
//import checkDatabaseConnection from "./db/connection";
//import { PrismaClient } from "@prisma/client";

import cors from "cors";

//const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("Swe Society server is Up...");
});

app.listen(PORT, async () => {
//   await checkDatabaseConnection();
  console.log(`SWE Society Server is running on PORT ${PORT}`);
});