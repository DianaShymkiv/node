const users = require("../userArray/userArray");

function isEmailExist(req, res, next) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error('All data are not provided!');
        }

        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            throw new Error('This user is not exist');
        }

        next();
    } catch (err) {
        // res.status(400).send(err.message);
        res.render('error', {errorMessage: err});
    }
}

module.exports = isEmailExist;