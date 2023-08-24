const router = require("express").Router();
const studentCtrl = require("../controllar/studentCtrl");

router.post("/",studentCtrl.register);
router.get("/",studentCtrl.findStudent);
// router.get("/:Name",studentCtrl.updatestedent);


 
module.exports = router;

