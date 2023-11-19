const express = require("express");
const router = express.Router();

// User
const v1_user = require("../user/user");
router.use("/v1/user", v1_user);

module.exports = router;