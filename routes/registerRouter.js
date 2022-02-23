const {Router} = require('express');

const registerController = require('../controllers/registerController');
const isEmailExist = require('../middlewares/isEmailExist');

const registerRouter = Router();

registerRouter.get('/', registerController.renderRegister);
registerRouter.post('/', isEmailExist, registerController.registerCheckEmail);

module.exports = registerRouter;