import { Router } from 'express';
import SessionController from 'controllers/SessionController';

const userRouter = Router();

userRouter.post('/', SessionController.create);

export default userRouter;
