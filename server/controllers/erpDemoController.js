const { submitDemoRequest } = require("./demoRequestController");

const submitErpDemo = (req, res) => {
  req.body = { ...req.body, demoType: "erp" };
  return submitDemoRequest(req, res);
};

module.exports = { submitErpDemo };
