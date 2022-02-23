const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));
app.engine('.hbs', engine({defaultLayout: false}));
app.use(express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(apiRoutes);


app.listen(5100, () => {
    console.log('App listen 5100');
});




