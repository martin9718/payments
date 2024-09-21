import './shared/infrastructure/load-env-vars';

import express from 'express';

import { config } from './shared/infrastructure/config';
import { userRouter } from './users/infrastructure/rest-api/user-router';

function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use('/users', userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

bootstrap();
