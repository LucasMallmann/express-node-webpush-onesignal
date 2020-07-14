import { Request, Response } from 'express';
import User from 'schemas/User';

class UserController {
  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = await User.create({ name, email, password });

    return response.status(201).json(user);
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const users = await User.find();

    return response.status(200).json(users);
  }
}

export default new UserController();
