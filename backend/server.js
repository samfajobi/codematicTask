const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const timezoneRoute = require("./routes/timezone")

const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 

app.use(express.json())

app.use("/api/timezone", timezoneRoute)

const PORT = 8080


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})