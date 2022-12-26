const { signin } = require('../controllers/usersController.js');

const express = require('express');

const router = express.Router();

router.post('/signin', signin);

module.exports = router;
