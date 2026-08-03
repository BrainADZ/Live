const express = require("express");
const { sendEnquireNow } = require("../controllers/mailerController");
const { submitErpDemo } = require("../controllers/erpDemoController");

const router = express.Router();

router.post("/enquire-now", sendEnquireNow);
router.post("/erp-demo", submitErpDemo);

module.exports = router;
