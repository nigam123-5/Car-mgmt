const express = require("express");
const mongoose = require("mongoose");
// require('dotenv').config();
const path = require('path')
const userRoutes =require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const jwt = require('jsonwebtoken')
const cors = require("cors")



const app = express();


const PORT = (process.env.PORT || 4000)
app.use(express.json());
app.use(cors())

//url paste kr dena ek database bana kr cars ka ok tum bol rhe the connect krloge database- password likho
const mongoDBURL = 'mongodb+srv://nigamsuryansh11:oJd0WvyGOv2VDNfY@cluster0.efryr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose
  .connect(mongoDBURL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



// jaise jaise bana api yahan include krte jaana 
app.use("/api", userRoutes);
app.use("/api",productRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
