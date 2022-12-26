const {
    createKelas,
    getKelas,
    createGuru,
    getGuru,
} = require('../controllers/tpqSideController.js');

const express = require('express');
const { route } = require('./users.js');

const router = express.Router();

router.post('/createkelas', createKelas);
router.get('/getkelas', getKelas);
router.post('/createguru', createGuru);
router.get('/getguru', getGuru);

module.exports = router;
