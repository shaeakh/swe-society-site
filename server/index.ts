import express , { Express, Request, Response } from "express";
const PORT = 5060;

const app = express();

app.get("/",(req,res)=>{
    res.send("Swe society starting");
});


app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`);
})