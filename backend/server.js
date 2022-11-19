require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(process.env);

const PORT = process.env.PORT || 5000;

// async function testcon() {
//     try {
//         await sequelize.authenticate();
//         console.log('COnnection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// testcon();

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
