const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  StudentId: Number,
    Name: String,
    Roll: Number,
    email:String
});

module.exports = mongoose.model("student", studentSchema);