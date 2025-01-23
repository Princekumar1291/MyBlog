const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');
const mongoose = require("mongoose");
const blogRouter = require("./routers/blogRouter");
const app=express();


require("dotenv").config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(express.json());
 
app.use('/api',blogRouter)


const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@princecluster.ns8if.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=PrinceCluster`;
const PORT=process.env.PORT || 3000;

mongoose.connect(MONGO_DB_URL).then(()=>{
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}).catch((err)=>{
  console.log("Error while connecting to db",err);
})

