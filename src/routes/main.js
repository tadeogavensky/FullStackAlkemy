const express = require("express");
const router = express.Router();


/////////////////////MAIN CONTROLLER///////////////////
const mainController = require("../controllers/mainController.js")
router.get("/", mainController.index) //home

module.exports = router;