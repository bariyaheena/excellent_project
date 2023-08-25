const studentModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
SECRET_KEY = "heenabh";
var nodemailer = require('nodemailer');

//register
const register = async (req, res) => {
  const { Name, email, password } = req.body

  //check exists student
  const user = await studentModel.findOne({ email: email })
  try {

    if (user) {
      res.json({ "status": "field", "message": "email is already exists" })
    }
    if (!Name && !email && !password) {
      res.json({ "message": "all fields are require" })
    }

    //hashpassword
    hash_password = bcrypt.hashSync(password, 10);

    const data = await studentModel.create({
      Name: Name,
      email: email,
      password: hash_password
    });

    //token
    const token = jwt.sign({ email: data.email, id: data._id }, SECRET_KEY);
    res.json({ student: data, token: token })

    //send mail
     
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'heenaecellenttechonologies@gmail.com',
          pass: 'uhdmxpigkjmnnjnf'
        }
      });

      var mailOptions = {
        from: 'heenaecellenttechonologies@gmail.com',
        to: data.email,
        subject: 'Register complete',
        text: `Welcome to our website! register successful${data.email}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  } catch (error) {
    res.json({ error: "something went wrong" })
  }
};

//login
const login = async (req, res) => {
  const { password, email } = req.body
  try {
    const user = await studentModel.findOne({ email: email })
    if (!user) {
      res.json({ message: "user not found" })
    }

    //match password
    const matchpass = await bcrypt.compare(password, user.password)
    if (!matchpass) {
      res.json({ message: "password doesn't match" })
    }

    //token
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY);
    res.json({ student: user, token: token })
  } catch (error) {
    console.log(error);
    res.json({ message: "something went wrong" })
  }
}
module.exports = {
  register,
  login

}
