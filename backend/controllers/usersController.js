const TU = require('../class/TU.js');
const Auth = require('../class/Auth.js');

exports.signin = async (req, res) => {
    const { username, password } = req.body;
    const auth = new Auth(username, password);
    auth.signin(res);
};
