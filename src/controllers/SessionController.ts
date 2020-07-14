/* eslint-disable no-underscore-dangle */
import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from 'schemas/User';
import authConfig from 'config/auth';

class SessionController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Error('Error in login');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    request.user.id = user._id;

    return response.json({ user, token });
  }
}

export default new SessionController();
