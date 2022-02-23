const {Router} = require('express');

const userController = require('../controllers/userController');


const userRouter = Router();

userRouter.get('/', userController.renderUsers);
userRouter.get('/:userId', userController.renderUserById);
userRouter.post('/:userId', userController.deleteUserById);

module.exports = userRouter;