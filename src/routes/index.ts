import { Router, Request, Response } from 'express';

import PushController from 'controllers/PushController';
import userRoutes from './users.routes';
import sessionRoutes from './session.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/session', sessionRoutes);

router.post('/push', PushController.store);

router.get('/', (req: Request, res: Response) => {
  return res.json('ola');
});

router.post('/subscribe', (request: Request, response: Response) => {
  return response.json('hey yu there');
});

export default router;
