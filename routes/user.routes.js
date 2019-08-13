const express = require('express');
const router = express.Router();

const { signup } = require("../controller.js/user.controllers");

router.get('/signup', signup);

module.exports = router;