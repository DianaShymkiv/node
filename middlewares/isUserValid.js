const users = require("../userArray/userArray");

function isUserValid(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;

        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('All data are not provided!');
        }

        const user = users.find(user => user.email === email);
        if (user) {
            throw new Error('User with this email address already exists');
        }

        if (password.length < 8) {
            throw new Error('Password must be more 6 symbols');
        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;