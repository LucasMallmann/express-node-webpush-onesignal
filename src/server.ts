/* eslint-disable no-console */
import 'reflect-metadata';
import dotenv from 'dotenv';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

dotenv.config();

// Database
// eslint-disable-next-line import/first
import './database';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🧨 app listening up and to port 3333');
});
