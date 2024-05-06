import express , { Express, Request, Response } from "express";
import pool, {testDatabaseConnection, connectToDB} from "./db/dbconnect";
import { createTables } from "./db/tables";
import authRoute from "./routes/auth";
import noticeRoute from "./routes/generalNotice";
import cors from "cors";



const PORT = 5050;

const app = express();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

app.get("/",(req,res)=>{
    res.send("Swe society starting");
});
app.use("/auth", authRoute);
app.use("/notice", noticeRoute);



app.listen(PORT, async ()=>{
    // await connectToDB();
    await testDatabaseConnection();
    await createTables();
    console.log(`Server is running in ${PORT}`);
})