const express = require("express");
const { sendEnquireNow } = require("../controllers/mailerController");

const router = express.Router();

router.post("/enquire-now", sendEnquireNow);

module.exports = router;