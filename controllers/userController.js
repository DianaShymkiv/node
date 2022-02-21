const users = require("../userArray/userArray");

class UserController {
    renderUsers(req, res) {
        if (req.query) {
            let arr = [...users];
            const {age, city} = req.query;
            if (city) {
                arr = arr.filter(user => user.city === city);
            }
            if (age) {
                arr = arr.filter(user => user.age === age);
            }

            res.render('users', {users: arr});
            return;
        }
        res.render('users', {users});
    };

    renderUserById(req, res) {
        const {userId} = req.params;
        const user = users[userId - 1];
        res.render('userById', {user, userId});
    };

    deleteUserById(req, res) {
        const {userId} = req.params;
        let user = users.find(user => +userId === user.id);

        if (user) {
            users.splice(userId - 1, 1);
            res.redirect('/users');
        }

    }
}

module.exports = new UserController();