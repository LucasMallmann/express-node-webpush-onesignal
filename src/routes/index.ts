import { Router, Request, Response } from 'express';

import userRoutes from './users.routes';

const router = Router();

router.use('/users', userRoutes);

router.get('/', (req: Request, res: Response) => {
  return res.json('ola');
});

router.post('/subscribe', (request: Request, response: Response) => {
  return response.json('hey yu there');
});

export default router;
