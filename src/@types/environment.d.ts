/* eslint-disable @typescript-eslint/interface-name-prefix */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      MONGO_URL: string;
      VAPID_PUBLIC_KEY: string;
      VAPID_PRIVATE_KEY: string;
    }
  }
}

export {};
