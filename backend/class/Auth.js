const User = require('../model/user.js');

const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/tokens.js');

class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async signin(res) {
        try {
            // Check keberadaan user
            const existingUser = await User.findOne({
                where: { username: this.username },
            });
            // console.log(existingUser);
            if (!existingUser) {
                return res
                    .status(404)
                    .json({ message: 'user atau password salah' });
            }

            // Check apakah password match dengan usernamenya
            const check = await bcrypt.compare(
                this.password,
                existingUser.password
            );
            if (!check) {
                return res
                    .status(400)
                    .json({ message: 'user atau password salah' });
            }
            // console.log(typeof existingUser.uuid_user);
            const token = generateToken({ id: existingUser.uuid_user }, '7d');
            res.status(200).send({
                uuid_user: existingUser.uuid_user,
                fullName: existingUser.fullName,
                alamat: existingUser.alamat,
                tempatLahir: existingUser.tempatLahir,
                tanggalLahir: existingUser.tanggalLahir,
                nomor_telp: existingUser.nomor_telp,
                kelamin: existingUser.kelamin,
                type: existingUser.type,
                username: existingUser.username,
                photo: existingUser.photo,
                token: token,
            });
        } catch (error) {
            res.status(500).json({ message: 'something went wrong' });
        }
    }
}

module.exports = Auth;
