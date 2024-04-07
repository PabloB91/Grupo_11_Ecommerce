const express = require("express");
const router = express.Router();
const resetPasswordController = require("../controllers/mailerResetController");

router.get("/password", resetPasswordController.getSendMail);
router.post("/password", resetPasswordController.sendMailProcess)

router.get('/control/form/?=2425rstpg31359/reset/password/:id', )

module.exports = router