require('dotenv').config();
const bcrypt = require('bcrypt');

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database.js');
const app = express();

// import model
const User = require('./model/user.js');
const Guru = require('./model/guru.js');
const Kelas = require('./model/kelas.js');
const Siswa = require('./model/siswa.js');
const Spp = require('./model/SppModel.js');
const Logs = require('./model/LogsModel.js');

const userRoutes = require('./routes/users.js');
const tpqSideRoutes = require('./routes/tpqSide.js');
const tpqMainRoutes = require('./routes/tpqMain.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/admin', userRoutes);
app.use('/tpqside', tpqSideRoutes);
app.use('/tpqmain', tpqMainRoutes);
const PORT = process.env.PORT || 5000;

User.hasOne(Logs, { foreignKey: 'uuid_user' });
Logs.belongsTo(User, { foreignKey: 'uuid_user' });

Kelas.hasOne(Guru, { foreignKey: 'uuid_kelas' });
Guru.belongsTo(Kelas, { foreignKey: 'uuid_kelas' });

Siswa.hasOne(Spp, { foreignKey: 'uuid_siswa' });
Spp.belongsTo(Siswa, { foreignKey: 'uuid_siswa' });

Kelas.hasMany(Siswa, {
    foreignKey: {
        allowNull: true,
        name: 'uuid_kelas',
    },
});
Siswa.belongsTo(Kelas, {
    foreignKey: {
        allowNull: true,
        name: 'uuid_kelas',
    },
});

// {
//     force: true;
// }
sequelize
    // .sync({ force: true })
    .sync()
    .then(async (result) => {
        // console.log(result);
        const existingUser = await User.findOne({
            where: { username: 'azurephoto' },
        });

        if (!existingUser) {
            const hashPassword = await bcrypt.hash('goesgoes2', 12);
            User.create({
                fullName: 'Muhammad Fikri',
                alamat: 'Jln. Datuk Tunggul, S',
                tempatLahir: 'Pekanbaru',
                tanggalLahir: new Date(2001, 04, 13)
                    .toISOString()
                    .substring(0, 10),
                nomor_telp: '+62 813 83937583',
                kelamin: 'laki-laki',
                type: '0',
                username: 'azurephoto',
                password: hashPassword,
                photo: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png',
            });
        }

        const existingKelas = await Kelas.findOne({
            where: { nama_kelas: 'Iqra A' },
        });

        if (!existingKelas) {
            Kelas.create({
                nama_kelas: 'Iqra A',
            });
            Kelas.create({
                nama_kelas: 'Iqra B',
            });
            Kelas.create({
                nama_kelas: 'Iqra C',
            });
            Kelas.create({
                nama_kelas: 'Al-Quran',
            });
            Kelas.create({
                nama_kelas: 'Tahfidz',
            });
        }

        app.listen(PORT, () => {
            console.log(`Server running at port: ${PORT}`);
        });
    });
