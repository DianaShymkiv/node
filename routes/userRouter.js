const {Router} = require('express');
const userRouter = Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.renderUsers);
userRouter.get('/:userId', userController.renderUserById);
userRouter.post('/:userId', userController.deleteUserById);

module.exports = userRouter;