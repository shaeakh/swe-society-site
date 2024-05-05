const express = require("express");
const PORT = 5050;

const app = express();

app.get("/",(req,res)=>{
    res.send("Swe society start");
});


app.listen(PORT, ()=>{
    console.log(`Server is running in ${PORT}`);
})