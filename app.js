const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const fs = require('fs/promises');

const app = express();


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));
app.use(express.static(path.join(__dirname, 'static')));
app.engine('.hbs', engine({defaultLayout: false}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [{
    id: 1,
    firstName: 'Dima',
    lastName: 'Demchuk',
    email: 'demchuk@gmail.com',
    password: 'demchuk',
    age: '23',
    city: 'Lviv'
}, {
    id: 2,
    firstName: 'Kostya',
    lastName: 'Fedoriv',
    email: 'fedoriv@gmail.com',
    password: 'fedoriv11',
    age: '16',
    city: 'Kiyv'
}, {
    id: 3,
    firstName: 'Alina',
    lastName: 'Shum',
    email: 'shum@gmail.com',
    password: 'fff34',
    age: '45',
    city: 'Odessa'
}];


app.get('/error', ((req, res) => {
    res.render('error');
}));


app.get('/login', ((req, res) => {
    res.render('login');
}));

app.post('/login', (req, res) => {
    const email = users.find(user => user.email === req.body.email);
    if (email) {
        res.render('error', {errorMessage: "User with this email address already exists"});
        return;
    }
    users.push({...req.body, id: users.length + 1});

    res.redirect('/users');
});


app.get('/register', ((req, res) => {
    res.render('register');
}));

app.post('/register', ((req, res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        res.render('error', {errorMessage: "Password is wrong!"});
        return;
    }
    res.redirect(`/users/${user.id}`);
}));


app.get('/users', (req, res) => {
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
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId - 1];
    res.render('userById', {user, userId});

});

app.post('/users/:userId', (req, res) => {
    const {userId} = req.params;
    let user = users.find(user => +userId === user.id);
    // console.log(user);
    // console.log(users);

    if (user) {
        users.splice(userId - 1, 1);
        // console.log(users);
        res.redirect('/users');
        return;
    }

});

app.use(((req, res) => {
    res.render('notFound');
}));


app.listen(5100, () => {
    console.log('App listen 5100');
});




