const {Router} = require('express');

const loginController = require('../controllers/loginController');
const isUserValid = require('../middlewares/isUserValid');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', isUserValid, loginController.loginCheckEmail);

module.exports = loginRouter;