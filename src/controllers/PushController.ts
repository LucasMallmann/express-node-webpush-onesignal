import { Request, Response } from 'express';

import OneSignalClient from 'lib/OneSignal';

class PushController {
  async store(request: Request, response: Response): Promise<Response> {
    const { content } = request.body;

    const notification = {
      contents: {
        en: content,
      },
      included_segments: ['Subscribed Users'],
    };

    await OneSignalClient.createNotification({
      // include_external_user_ids: ''
      ...notification,
    });

    return response.status(200).json('pushing');
  }
}

export default new PushController();
