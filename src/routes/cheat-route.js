const express = require("express");

const cheatController = require("../controllers/cheat-controller");

const router = express.Router();

router.post("/cheat24", cheatController.addNumber);

module.exports = router;
