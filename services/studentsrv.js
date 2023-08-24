const studentModel = require("../model/user");

const Createstudent = async (data) =>{

  const savedata = await studentModel.create(data)
  return savedata
}

const  findStudent = async (query) => {
  const findData = await studentModel.find(query)
  return findData
}

module.exports = {
  Createstudent,
  findStudent
}