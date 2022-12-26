const SPPModel = require('../model/SppModel.js');
const SiswaModel = require('../model/siswa.js');
const Logs = require('./Logs.js');
const { Op } = require('sequelize');
class SPP {
    constructor({
        bulan_spp_terakhir_dibayar,
        tanggal_bayar,
        jumlah_bulan_dibayar,
        jumlah_bayar,
        uuid_siswa,
        uuid_user,
    }) {
        this.bulan_spp_terakhir_dibayar = bulan_spp_terakhir_dibayar;
        this.tanggal_bayar = tanggal_bayar;
        this.jumlah_bulan_dibayar = jumlah_bulan_dibayar;
        this.jumlah_bayar = jumlah_bayar;
        this.uuid_siswa = uuid_siswa;
        this.uuid_user = uuid_user;
    }

    async insert(res) {
        try {
            const spp = await SPPModel.create({
                tanggal_bayar: this.tanggal_bayar,
                jumlah_bulan_dibayar: this.jumlah_bulan_dibayar,
                jumlah_bayar: this.jumlah_bayar,
                uuid_siswa: this.uuid_siswa,
            });

            await SiswaModel.update(
                {
                    bulan_spp_terakhir_dibayar: this.bulan_spp_terakhir_dibayar,
                },
                { where: { uuid_siswa: this.uuid_siswa } }
            );

            const dataSiswa = await SiswaModel.findOne({
                where: {
                    uuid_siswa: this.uuid_siswa,
                },
                attributes: ['nama_lengkap', 'uuid_siswa', 'nik_anak'],
            });

            const logs = new Logs(
                this.uuid_user,
                `Insert siswa baru dengan nik ${dataSiswa.nik_anak} dan nama ${dataSiswa.nama_lengkap}`,
                new Date().toISOString()
            );

            const result = await logs.create();

            res.status(201).json({ data: spp, siswa: dataSiswa, logs: result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPerPage(req, res) {
        try {
            const { page } = req.query;
            const LIMIT = 7;
            const startIndex = (+page - 1) * LIMIT;
            const totalSPP = await SPPModel.count();

            const spp = await SPPModel.findAll({
                limit: LIMIT,
                offset: startIndex,
                include: [
                    {
                        model: SiswaModel,
                        attributes: ['nama_lengkap', 'uuid_siswa'],
                    },
                ],
                order: [['createdAt', 'DESC']],
            });
            res.status(200).json({
                spp,
                currentPage: +page,
                numberOfPages: Math.ceil(totalSPP / LIMIT),
                startIndex: startIndex + 1,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getSPPBetweenTwoDate(req, res) {
        try {
            const { startDate, endDate } = req.query;
            const spp = await SPPModel.findAll({
                where: {
                    tanggal_bayar: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                include: [
                    {
                        model: SiswaModel,
                        attributes: ['nama_lengkap', 'uuid_siswa'],
                    },
                ],
                order: [['createdAt', 'DESC']],
            });
            res.status(200).json({ spp });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async getTotalSPPInThisMonth(req, res) {
        try {
            const { startDate, endDate } = req.query;
            const totalSPP = await SPPModel.sum('jumlah_bayar', {
                where: {
                    tanggal_bayar: {
                        [Op.between]: [startDate, endDate],
                    },
                },
            });
            res.status(200).json({ totalSPP });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = SPP;
