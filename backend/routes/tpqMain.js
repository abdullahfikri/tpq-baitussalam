const {
    insertSiswa,
    getSiswaPerPage,
    getSiswaByNik,
    getAllSiswa,
    insertSpp,
    getSppPerPage,
    getSppBetweenTwoDate,
    getTotalInMonth,
    getLogsPerPage,
} = require('../controllers/tpqMainController.js');

const express = require('express');

const router = express.Router();

router.post('/insertsiswa', insertSiswa);
router.get('/siswa', getSiswaPerPage);
router.get('/siswa/:nik', getSiswaByNik);
router.get('/allsiswa', getAllSiswa);

router.post('/insertspp', insertSpp);
router.get('/spp', getSppPerPage);
router.get('/spp/betweentwodate', getSppBetweenTwoDate);
router.get('/spp/totalinmonth', getTotalInMonth);

router.get('/logs', getLogsPerPage);

module.exports = router;
