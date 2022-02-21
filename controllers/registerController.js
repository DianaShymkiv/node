const users = require("../userArray/userArray");

class RegisterController {

    renderRegister(req, res) {
        res.render('register');
    };

    registerCheckEmail(req, res) {
        const {email, password} = req.body;
        const user = users.find(user => user.email === email);

        // if (!user || user.password !== password) {
        //     res.render('error', {errorMessage: "NOT VALID DATA!"});
        //     return;
        // }
        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new RegisterController();