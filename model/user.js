const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const studentSchema = new mongoose.Schema({
  // _id:mongoose.Schema.Types.ObjectId,
  Name: {
    type:String,
    require:true
  },
  email: {
    type:String,
    require:true
  },
  password: {
    type:String,
    require:true
  }
});

module.exports = mongoose.model("student", studentSchema);