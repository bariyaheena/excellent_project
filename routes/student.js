const router = require("express").Router();
const studentCtrl = require("../controllar/studentCtrl");


router.post("/register",studentCtrl.register);
router.post("/login",studentCtrl.login);
// router.get("/:Name",studentCtrl.updatestedent);


 
module.exports = router;

