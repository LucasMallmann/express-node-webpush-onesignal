import { Router } from 'express';
import UserController from 'controllers/UserController';

import authMiddleware from 'middlewares/auth';

const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.post('/', UserController.store);
userRouter.get('/', UserController.findAll);

export default userRouter;
