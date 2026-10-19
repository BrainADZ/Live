const express = require("express");
const { sendEnquireNow } = require("../controllers/mailerController");
const { submitErpDemo } = require("../controllers/erpDemoController");
const { submitDemoRequest } = require("../controllers/demoRequestController");

const router = express.Router();

router.post("/enquire-now", sendEnquireNow);
router.post("/erp-demo", submitErpDemo);
router.post("/demo-request", submitDemoRequest);

module.exports = router;
