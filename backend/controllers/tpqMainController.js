const Siswa = require('../class/Siswa.js');
const SPP = require('../class/SPP.js');
const Logs = require('../class/Logs.js');
// const Guru = require('../class/Guru.js');

exports.insertSiswa = async (req, res, next) => {
    // console.log(req.body);
    const siswa = new Siswa({ ...req.body });
    siswa.insertSiswa(res);
};

exports.getSiswaPerPage = async (req, res, next) => {
    const page = req.query.page;
    Siswa.getSiswaPerPage(page, res);
};

exports.getAllSiswa = async (req, res, next) => {
    Siswa.getAllSiswa(res);
};

exports.getSiswaByNik = async (req, res, next) => {
    const nik = req.params.nik;
    // console.log(nik);
    Siswa.getSiswaByNik(nik, res);
};

exports.insertSpp = async (req, res, next) => {
    const spp = new SPP({ ...req.body });
    spp.insert(res);
};

exports.getSppPerPage = async (req, res, next) => {
    SPP.getPerPage(req, res);
};

exports.getSppBetweenTwoDate = async (req, res, next) => {
    SPP.getSPPBetweenTwoDate(req, res);
};

exports.getTotalInMonth = async (req, res, next) => {
    SPP.getTotalSPPInThisMonth(req, res);
};

exports.getLogsPerPage = async (req, res) => {
    Logs.getLogsPerPage(req, res);
};
