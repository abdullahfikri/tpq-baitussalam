const Person = require('./Person');
const Siswa = require('../class/Siswa.js');
const SPP = require('../class/SPP.js');
const Logs = require('../class/Logs.js');
const User = require('../model/user.js');
class TU extends Person {
    constructor({
        uuid_user,
        fullName,
        alamat,
        tempatLahir,
        tanggalLahir,
        nomor_telp,
        jenis_kelamin,
        type,
        username,
        password,
        photo,
    }) {
        super(
            fullName,
            alamat,
            tempatLahir,
            tanggalLahir,
            jenis_kelamin,
            nomor_telp
        );
        this.type = type;
        this.username = username;
        this.password = password;
        this.photo = photo;
        this.uuid_user = uuid_user;
    }

    /**
     * @START TU PROPERTI
     */

    async createTU(req, res) {
        try {
            console.log(this);
            const existingUser = await User.findOne({
                where: { username: this.username },
            });

            if (existingUser) {
                return res
                    .status(403)
                    .json({ message: 'Username sudah digunakan' });
            }

            const tu = await User.create({
                fullName: this.fullName,
                alamat: this.alamat,
                tempatLahir: this.tempatLahir,
                tanggalLahir: this.tanggalLahir,
                jenis_kelamin: this.jenis_kelamin,
                nomor_telp: this.nomor_telp,
                type: this.type,
                username: this.username,
                password: this.password,
                photo: this.photo,
            });

            res.status(200).json({
                message: 'Berhasil menambahkan TU baru',
                tu: { ...tu.dataValues, password: '', photo: '' },
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Terjadi kesalahan' });
        }
    }

    static getTUPerPage = async (req, res, next) => {
        const { page } = req.query;
        const LIMIT = 7;
        const startIndex = (+page - 1) * LIMIT;
        const totalUser = await User.count();

        try {
            const TU = await User.findAll({
                attributes: ['uuid_user', 'fullName', 'nomor_telp'],
                limit: LIMIT,
                offset: startIndex,
                where: { type: '0' },
                order: [['createdAt', 'DESC']],
            });

            res.status(200).json({
                tu: TU,
                currentPage: +page,
                numberOfPages: Math.ceil(totalUser / LIMIT),
                startIndex: startIndex + 1,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    getTUById = async (req, res, next) => {
        try {
            const TU = await User.findOne({
                where: {
                    uuid_user: this.uuid_user,
                },
                attributes: {
                    exclude: ['password', 'photo'],
                },
            });

            res.status(200).json({ tuDetail: TU });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    updateTU = async (req, res, next) => {
        const uuid_user = this.uuid_user;

        try {
            const newTU = await User.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        uuid_user: uuid_user,
                    },
                }
            );
            const TU = await User.findOne({
                where: {
                    uuid_user,
                },
                attributes: {
                    exclude: ['password', 'photo'],
                },
            });
            res.status(200).json({
                message: 'Berhasil mengubah data TU',
                tu: TU,
            });
        } catch (error) {
            console.log(error);
        }
    };

    deleteTU = async (req, res, next) => {
        try {
            await User.destroy({
                where: {
                    uuid_user: this.uuid_user,
                },
            });

            res.status(200).json({
                message: 'Berhasil menghapus TU',
                id: this.uuid_user,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    /**
     * @END TU PROPERTI
     */

    static insertSiswa = async (req, res, next) => {
        // console.log(req.body);
        const siswa = new Siswa({ ...req.body });
        siswa.insertSiswa(res);
    };

    static updateSiswa = async (req, res, next) => {
        const siswa = new Siswa({ ...req.body });
        siswa.updateSiswa(res);
    };

    static getSiswaPerPage = async (req, res, next) => {
        const page = req.query.page;
        Siswa.getSiswaPerPage(page, res);
    };

    static getAllSiswa = async (req, res, next) => {
        Siswa.getAllSiswa(res);
    };

    static getSiswaByNik = async (req, res, next) => {
        const nik = req.params.nik;
        // console.log(nik);
        Siswa.getSiswaByNik(nik, res);
    };

    static insertSpp = async (req, res, next) => {
        const spp = new SPP({ ...req.body });
        spp.insert(res);
    };

    static getSppPerPage = async (req, res, next) => {
        SPP.getPerPage(req, res);
    };

    static getSppBetweenTwoDate = async (req, res, next) => {
        SPP.getSPPBetweenTwoDate(req, res);
    };

    static getTotalInMonth = async (req, res, next) => {
        SPP.getTotalSPPInThisMonth(req, res);
    };

    static getLogsPerPage = async (req, res) => {
        Logs.getLogsPerPage(req, res);
    };
}

module.exports = TU;
