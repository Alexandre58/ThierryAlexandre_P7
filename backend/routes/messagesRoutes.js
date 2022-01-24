'use strict';
const express = require("express");
const messagesController = require("../controllers/messages.controllers");


const router = express.Router();
//localhost3000/messages
router.post("/", messagesController.save);
//localhost3000/messages/1
router.get("/:id", messagesController.show);




module.exports = router;