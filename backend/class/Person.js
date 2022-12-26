class Person {
    constructor(
        fullName,
        alamat,
        tempatLahir,
        tanggalLahir,
        kelamin,
        nomor_telp
    ) {
        this.fullName = fullName;
        this.alamat = alamat;
        this.tanggalLahir = tanggalLahir;
        this.tempatLahir = tempatLahir;
        this.nomor_telp = nomor_telp;
        this.kelamin = kelamin;
    }

    calcAge() {
        this.age =
            new Date().getFullYear() - new Date(tanggalLahir).getFullYear();
    }
}

module.exports = Person;
