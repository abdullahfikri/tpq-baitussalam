const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js');

const Siswa = sequelize.define('siswa', {
    uuid_siswa: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    // data anak
    nama_lengkap: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nik_anak: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    no_kk: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    no_akta: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    alamat_rumah: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    kelurahan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kecamatan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    agama: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    anak_ke: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jumlah_saudara: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    keterangan_yatim: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    golongan_darah: {
        type: DataTypes.STRING(5),
        allowNull: true,
    },
    // data orang tua
    // ayah
    nama_ayah: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nik_ayah: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    tempat_lahir_ayah: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tanggal_lahir_ayah: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    pendidikan_ayah: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    pekerjaan_ayah: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    alamat_ayah: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nomor_telp_ayah: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    penghasilan_ayah: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    // ibu
    nama_ibu: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nik_ibu: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    tempat_lahir_ibu: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tanggal_lahir_ibu: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    pendidikan_ibu: {
        type: DataTypes.STRING(50),

        allowNull: false,
    },
    pekerjaan_ibu: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    alamat_ibu: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nomor_telp_ibu: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    penghasilan_ibu: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    // wali
    nama_wali: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    nik_wali: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    tempat_lahir_wali: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    tanggal_lahir_wali: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    pendidikan_wali: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    pekerjaan_wali: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    alamat_wali: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    nomor_telp_wali: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    penghasilan_wali: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    bulan_spp_terakhir_dibayar: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    tanggal_masuk: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    tanggal_keluar: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    photo: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

module.exports = Siswa;
