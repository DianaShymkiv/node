const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/register', registerRouter);
routes.use((req, res) => {
    res.render('notFound');
});

module.exports = routes;