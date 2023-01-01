const TU = require('../class/TU.js');
const Kepsek = require('../class/Kepsek.js');

const express = require('express');

const router = express.Router();

router.post('/insertsiswa', TU.insertSiswa);
router.post('/updatesiswa', TU.updateSiswa);
router.get('/siswa', TU.getSiswaPerPage);
router.get('/siswa/:nik', TU.getSiswaByNik);
router.get('/allsiswa', TU.getAllSiswa);

router.post('/insertspp', TU.insertSpp);
router.get('/spp', TU.getSppPerPage);
router.get('/spp/betweentwodate', TU.getSppBetweenTwoDate);
router.get('/spp/totalinmonth', TU.getTotalInMonth);
router.get('/logs', TU.getLogsPerPage);

router.post('/createtu', Kepsek.createTU);
router.post('/getsppbyid', Kepsek.getSPPByUUID);
router.post('/updatespp', Kepsek.updateSPP);
router.post('/updatetu', Kepsek.updateTU);
router.post('/deletetu', Kepsek.deleteTU);
router.get('/tu', Kepsek.getTUPerPage);
router.post('/detailtu', Kepsek.getTUById);

// router.post('/insertsiswa', insertSiswa);
// router.get('/siswa', getSiswaPerPage);
// router.get('/siswa/:nik', getSiswaByNik);
// router.get('/allsiswa', getAllSiswa);

// router.post('/insertspp', insertSpp);
// router.get('/spp', getSppPerPage);
// router.get('/spp/betweentwodate', getSppBetweenTwoDate);
// router.get('/spp/totalinmonth', getTotalInMonth);

// router.get('/logs', getLogsPerPage);

module.exports = router;
