const siswaDb = require('../model/siswa.js');
const Logs = require('./Logs.js');
const Kelas = require('../model/kelas.js');

class Siswa {
    constructor({
        uuid_siswa,
        nama_lengkap,
        nik_anak,
        no_kk,
        no_akta,
        jenis_kelamin,
        tempat_lahir,
        tanggal_lahir,
        alamat_rumah,
        kelurahan,
        kecamatan,
        agama,
        anak_ke,
        jumlah_saudara,
        keterangan_yatim,
        golongan_darah = '',

        nama_ayah,
        nik_ayah,
        tempat_lahir_ayah,
        tanggal_lahir_ayah,
        pendidikan_ayah,
        pekerjaan_ayah,
        alamat_ayah,
        nomor_telp_ayah,
        penghasilan_ayah,

        nama_ibu,
        nik_ibu,
        tempat_lahir_ibu,
        tanggal_lahir_ibu,
        pendidikan_ibu,
        pekerjaan_ibu,
        alamat_ibu,
        nomor_telp_ibu,
        penghasilan_ibu,

        nama_wali = '',
        nik_wali = '',
        tempat_lahir_wali = '',
        tanggal_lahir_wali,
        pendidikan_wali = '',
        pekerjaan_wali = '',
        alamat_wali = '',
        nomor_telp_wali = '',
        penghasilan_wali = 0,

        bulan_spp_terakhir_dibayar,
        status = 'active',
        tanggal_masuk,
        uuid_kelas,
        photo = '',

        uuid_user,
    }) {
        this.uuid_siswa = uuid_siswa;
        this.nama_lengkap = nama_lengkap;
        this.nik_anak = nik_anak;
        this.no_kk = no_kk;
        this.no_akta = no_akta;
        this.jenis_kelamin = jenis_kelamin;
        this.tempat_lahir = tempat_lahir;
        this.tanggal_lahir = tanggal_lahir;
        this.alamat_rumah = alamat_rumah;
        this.kelurahan = kelurahan;
        this.kecamatan = kecamatan;
        this.agama = agama;
        this.anak_ke = +anak_ke;
        this.jumlah_saudara = +jumlah_saudara;
        this.keterangan_yatim = keterangan_yatim;
        this.golongan_darah = golongan_darah;

        this.nama_ayah = nama_ayah;
        this.nik_ayah = nik_ayah;
        this.tempat_lahir_ayah = tempat_lahir_ayah;
        this.tanggal_lahir_ayah = tanggal_lahir_ayah;
        this.pendidikan_ayah = pendidikan_ayah;
        this.pekerjaan_ayah = pekerjaan_ayah;
        this.alamat_ayah = alamat_ayah;
        this.nomor_telp_ayah = nomor_telp_ayah;
        this.penghasilan_ayah = +penghasilan_ayah;

        this.nama_ibu = nama_ibu;
        this.nik_ibu = nik_ibu;
        this.tempat_lahir_ibu = tempat_lahir_ibu;
        this.tanggal_lahir_ibu = tanggal_lahir_ibu;
        this.pendidikan_ibu = pendidikan_ibu;
        this.pekerjaan_ibu = pekerjaan_ibu;
        this.alamat_ibu = alamat_ibu;
        this.nomor_telp_ibu = nomor_telp_ibu;
        this.penghasilan_ibu = +penghasilan_ibu;

        this.nama_wali = nama_wali;
        this.nik_wali = nik_wali;
        this.tempat_lahir_wali = tempat_lahir_wali;
        this.tanggal_lahir_wali = tanggal_lahir_wali;
        this.pendidikan_wali = pendidikan_wali;
        this.pekerjaan_wali = pekerjaan_wali;
        this.alamat_wali = alamat_wali;
        this.nomor_telp_wali = nomor_telp_wali;
        this.penghasilan_wali = +penghasilan_wali;

        this.bulan_spp_terakhir_dibayar = bulan_spp_terakhir_dibayar;
        this.status = status;
        this.tanggal_masuk = tanggal_masuk;
        this.uuid_kelas = uuid_kelas;
        this.photo = photo;

        this.uuid_user = uuid_user;
    }

    async insertSiswa(res) {
        try {
            const existingSiswaNik = await siswaDb.findOne({
                where: {
                    nik_anak: this.nik_anak,
                },
            });

            if (existingSiswaNik) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Nik siswa sudah terdaftar',
                });
            }
            console.log(this.photo);

            const siswa = await siswaDb
                .create(
                    {
                        nama_lengkap: this.nama_lengkap,
                        nik_anak: this.nik_anak,
                        no_kk: this.no_kk,
                        no_akta: this.no_akta,
                        jenis_kelamin: this.jenis_kelamin,
                        tempat_lahir: this.tempat_lahir,
                        tanggal_lahir: this.tanggal_lahir,
                        alamat_rumah: this.alamat_rumah,
                        kelurahan: this.kelurahan,
                        kecamatan: this.kecamatan,
                        agama: this.agama,
                        anak_ke: this.anak_ke,
                        jumlah_saudara: this.jumlah_saudara,
                        keterangan_yatim: this.keterangan_yatim,
                        golongan_darah: this.golongan_darah,
                        nama_ayah: this.nama_ayah,
                        nik_ayah: this.nik_ayah,
                        tempat_lahir_ayah: this.tempat_lahir_ayah,
                        tanggal_lahir_ayah: this.tanggal_lahir_ayah,
                        pendidikan_ayah: this.pendidikan_ayah,
                        pekerjaan_ayah: this.pekerjaan_ayah,
                        alamat_ayah: this.alamat_ayah,
                        nomor_telp_ayah: this.nomor_telp_ayah,
                        penghasilan_ayah: this.penghasilan_ayah,
                        nama_ibu: this.nama_ibu,
                        nik_ibu: this.nik_ibu,
                        tempat_lahir_ibu: this.tempat_lahir_ibu,
                        tanggal_lahir_ibu: this.tanggal_lahir_ibu,
                        pendidikan_ibu: this.pendidikan_ibu,
                        pekerjaan_ibu: this.pekerjaan_ibu,
                        alamat_ibu: this.alamat_ibu,
                        nomor_telp_ibu: this.nomor_telp_ibu,
                        penghasilan_ibu: this.penghasilan_ibu,
                        nama_wali: this.nama_wali,
                        nik_wali: this.nik_wali,
                        tempat_lahir_wali: this.tempat_lahir_wali,
                        tanggal_lahir_wali: this.tanggal_lahir_wali,
                        pendidikan_wali: this.pendidikan_wali,
                        pekerjaan_wali: this.pekerjaan_wali,
                        alamat_wali: this.alamat_wali,
                        nomor_telp_wali: this.nomor_telp_wali,
                        penghasilan_wali: this.penghasilan_wali,
                        bulan_spp_terakhir_dibayar:
                            this.bulan_spp_terakhir_dibayar,
                        status: this.status,
                        tanggal_masuk: this.tanggal_masuk,
                        uuid_kelas: this.uuid_kelas,
                        photo: this.photo,
                    },
                    { include: [Kelas] }
                )
                .catch((err) => {
                    console.log(err);
                });

            const logs = new Logs(
                this.uuid_user,
                `Insert siswa baru dengan nik ${this.nik_anak} dan nama ${this.nama_lengkap}`,
                new Date().toISOString()
            );

            const result = await logs.create();

            res.status(201).json({
                message: 'Siswa created',
                siswa: siswa,
                logs: result,
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error });
        }
    }

    static async getSiswaByUuid(uuid) {
        const siswa = await siswaDb
            .findOne({
                where: {
                    uuid,
                },
            })
            .then((data) => {
                return data;
            });
        return siswa;
    }

    async updateSiswa(res) {
        try {
            const existingSiswaNik = await siswaDb.findOne({
                where: {
                    nik_anak: this.nik_anak,
                },
            });

            if (!existingSiswaNik) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Nik siswa tidak terdaftar',
                });
            }

            const siswa = await siswaDb.update(
                {
                    nama_lengkap: this.nama_lengkap,
                    nik_anak: this.nik_anak,
                    no_kk: this.no_kk,
                    no_akta: this.no_akta,
                    jenis_kelamin: this.jenis_kelamin,
                    tempat_lahir: this.tempat_lahir,
                    tanggal_lahir: this.tanggal_lahir,
                    alamat_rumah: this.alamat_rumah,
                    kelurahan: this.kelurahan,
                    kecamatan: this.kecamatan,
                    agama: this.agama,
                    anak_ke: this.anak_ke,
                    jumlah_saudara: this.jumlah_saudara,
                    keterangan_yatim: this.keterangan_yatim,
                    golongan_darah: this.golongan_darah,
                    nama_ayah: this.nama_ayah,
                    nik_ayah: this.nik_ayah,
                    tempat_lahir_ayah: this.tempat_lahir_ayah,
                    tanggal_lahir_ayah: this.tanggal_lahir_ayah,
                    pendidikan_ayah: this.pendidikan_ayah,
                    pekerjaan_ayah: this.pekerjaan_ayah,
                    alamat_ayah: this.alamat_ayah,
                    nomor_telp_ayah: this.nomor_telp_ayah,
                    penghasilan_ayah: this.penghasilan_ayah,
                    nama_ibu: this.nama_ibu,
                    nik_ibu: this.nik_ibu,
                    tempat_lahir_ibu: this.tempat_lahir_ibu,
                    tanggal_lahir_ibu: this.tanggal_lahir_ibu,
                    pendidikan_ibu: this.pendidikan_ibu,
                    pekerjaan_ibu: this.pekerjaan_ibu,
                    alamat_ibu: this.alamat_ibu,
                    nomor_telp_ibu: this.nomor_telp_ibu,
                    penghasilan_ibu: this.penghasilan_ibu,
                    nama_wali: this.nama_wali,
                    nik_wali: this.nik_wali,
                    tempat_lahir_wali: this.tempat_lahir_wali,
                    tanggal_lahir_wali: this.tanggal_lahir_wali,
                    pendidikan_wali: this.pendidikan_wali,
                    pekerjaan_wali: this.pekerjaan_wali,
                    alamat_wali: this.alamat_wali,
                    nomor_telp_wali: this.nomor_telp_wali,
                    penghasilan_wali: this.penghasilan_wali,
                    bulan_spp_terakhir_dibayar: this.bulan_spp_terakhir_dibayar,
                    status: this.status,
                    tanggal_masuk: this.tanggal_masuk,
                    uuid_kelas: this.uuid_kelas,
                    photo: this.photo,
                },
                {
                    where: {
                        uuid_siswa: this.uuid_siswa,
                    },
                }
            );

            const logs = new Logs(
                this.uuid_user,
                `Update siswa dengan nik ${this.nik_anak} dan nama ${this.nama_lengkap}`,
                new Date().toISOString()
            );

            const result = await logs.create();

            return res.status(200).json({
                message: 'Siswa updated',
                siswa: siswa,
                logs: result,
            });
        } catch (error) {
            console.log(error);
            return res

                .status(500)
                .json({ message: 'Internal server error', error });
        }
    }

    static async getSiswaByNik(nik, res) {
        try {
            const siswa = await siswaDb.findOne({
                where: {
                    nik_anak: nik,
                },
                include: Kelas,
            });
            return res.status(200).json({ siswa: siswa });
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Internal server error', error });
        }
    }

    static async getSiswaByNikOrNama(nik, nama) {
        const siswa = await siswaDb
            .findOne({
                where: {
                    [Op.or]: [{ nik_anak: nik }, { nama_lengkap: nama }],
                },
            })
            .then((data) => {
                return data;
            });
        return siswa;
    }

    static async getAllSiswa(res) {
        try {
            const siswa = await siswaDb.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                include: Kelas,
                order: [['createdAt', 'DESC']],
            });
            return res.status(200).json({ data: siswa });
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Internal server error', error });
        }
    }

    static async getSiswaPerPage(page, res) {
        const LIMIT = 7;
        const startIndex = (+page - 1) * LIMIT;
        const totalSiswa = await siswaDb.count();

        // console.log(startIndex + 1);

        try {
            const dataSiswa = await siswaDb
                .findAll({
                    limit: LIMIT,
                    offset: startIndex,
                    include: Kelas,
                    order: [['createdAt', 'DESC']],
                })
                .then((data) => {
                    return data;
                });
            return res.status(200).json({
                message: 'Success',
                siswa: dataSiswa,
                currentPage: +page,
                numberOfPage: Math.ceil(totalSiswa / LIMIT),
                startIndex: startIndex + 1,
            });
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Internal server error', error });
        }
    }
}

module.exports = Siswa;
