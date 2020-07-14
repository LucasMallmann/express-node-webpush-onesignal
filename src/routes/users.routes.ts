import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  return res.json('ola');
});

export default router;
