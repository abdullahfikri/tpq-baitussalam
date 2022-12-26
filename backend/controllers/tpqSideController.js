const Kelas = require('../model/kelas.js');
const Guru = require('../model/guru.js');

exports.createKelas = async (req, res, next) => {
    const { nama_kelas } = req.body;
    try {
        const kelas = await Kelas.create({
            nama_kelas: nama_kelas,
        });
        res.status(201).json({
            message: 'Kelas created successfully!',
            data: kelas,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Kelas creation failed!',
            error: error,
        });
    }
};

exports.getKelas = async (req, res, next) => {
    try {
        const kelas = await Kelas.findAll();
        res.status(200).json({
            message: 'Kelas fetched successfully!',
            data: kelas,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Kelas fetch failed!',
            error: error,
        });
    }
};

exports.createGuru = async (req, res, next) => {
    const { fullName, alamat, nip = null, nomor_telp } = req.body;

    try {
        const guru = await Guru.create({
            fullName: fullName,
            alamat: alamat,
            nip: nip,
            nomor_telp: nomor_telp,
        });
        res.status(201).json({
            message: 'Guru created successfully!',
            data: guru,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Guru creation failed!',
            error: error,
        });
    }
};

exports.getGuru = async (req, res, next) => {
    try {
        const guru = await Guru.findAll();
        res.status(200).json({
            message: 'Guru fetched successfully!',
            data: guru,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Guru fetch failed!',
            error: error,
        });
    }
};
