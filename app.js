const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

require("./connection/mongo");
const port = process.env.PORT;
const user = require("./model/user");

const studentRoutes = require("./routes/student");
app.use(express.json());

//routes middleware
app.use("/students",studentRoutes);


app.listen(port,()=>console.log(`server start on ${port}`));