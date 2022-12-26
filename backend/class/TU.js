const Person = require('./Person');

class Ketua extends Person {
    constructor(
        uuid_user,
        fullName,
        alamat,
        tempatLahir,
        tanggalLahir,
        nomor_telp,
        kelamin,
        type,
        username,
        password,
        photo
    ) {
        super(fullName, alamat, tempatLahir, tanggalLahir, kelamin, nomor_telp);
        this.type = type;
        this.username = username;
        this.password = password;
        this.photo = photo;
    }

    listTU() {
        // List user sebagai TU
    }
    addTU() {
        // Menambah user sebagai TU
    }
    deleteTU(id) {
        // menghapus tu berdasarkan ID
    }
    editTU(id) {
        // Mengedit TU berdasarkan ID
    }
    logActivity(pesan) {}
}

module.exports = Ketua;
