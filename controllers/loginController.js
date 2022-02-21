const users = require("../userArray/userArray");

class LoginController {

    renderLogin(req, res) {
        res.render('login');
    };

    loginCheckEmail(req, res) {

        users.push({...req.body, id: users.length + 1});
        res.redirect('/users');
    };
}

module.exports = new LoginController();