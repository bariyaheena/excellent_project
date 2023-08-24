const studentSrv = require("../services/studentsrv");

const register = async (req,res) =>{
  const datas = {
    Name:req.body.Name,
    Roll:req.body.Roll,
    email:req.body.email
  };
  console.log(datas)
  try{
    const data = await studentSrv.Createstudent(datas);
    res.json(data)
  }catch(error){
    res.json(error)
 }
}
module.exports= {
  register
}
