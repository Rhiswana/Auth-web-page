const express = require('express');
const app = express();


const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); 
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("mongodb connected");
})
.catch(err =>{
    console.log("db err",err);
})
const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);
app.listen(PORT,()=>{
    console.log('server is listening');
})