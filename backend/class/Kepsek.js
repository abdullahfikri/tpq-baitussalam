const Person = require('./Person.js');
const TU = require('./TU.js');
const SPP = require('./SPP.js');
const bcrypt = require('bcrypt');
class Kepsek extends Person {
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
        this.uuid_user = uuid_user;
    }

    static async createTU(req, res) {
        const { password } = req.body;
        const hashPassword = await bcrypt.hash(password, 12);

        const tu = new TU({ ...req.body, password: hashPassword });
        await tu.createTU(req, res);
    }

    static async getTUPerPage(req, res) {
        await TU.getTUPerPage(req, res);
    }

    static async getTUById(req, res) {
        const tu = new TU({ ...req.body });
        await tu.getTUById(req, res);
    }

    static async updateTU(req, res) {
        const tu = new TU({ ...req.body });
        await tu.updateTU(req, res);
    }

    static async deleteTU(req, res) {
        const tu = new TU({ ...req.body });
        await tu.deleteTU(req, res);
    }
    static async getSPPByUUID(req, res) {
        await SPP.getSPPByUUID(req, res);
    }
    static async updateSPP(req, res) {
        await SPP.update(req, res);
    }
}

module.exports = Kepsek;
