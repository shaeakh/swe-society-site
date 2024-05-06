import express , { Express, Request, Response } from "express";
import pool, {testDatabaseConnection, connectToDB} from "./db/dbconnect";
const PORT = 5050;

const app = express();

app.get("/",(req,res)=>{
    res.send("Swe society starting");
});

// Endpoint to test database connection



app.listen(PORT, async ()=>{
    // await connectToDB();
    await testDatabaseConnection();
    console.log(`Server is running in ${PORT}`);
})