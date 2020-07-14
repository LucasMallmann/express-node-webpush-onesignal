import { Request, Response } from 'express';

class UserController {
  async store(request: Request, response: Response): Promise<Response> {
    return response.json('ola user');
  }
}

export default new UserController();
