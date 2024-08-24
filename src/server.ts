import express from 'express';
import env from './config/env';
import logger from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiterMiddleware } from './middleware/rateLimiter';

const app = express();

// Apply rate limiter to all requests
app.use(rateLimiterMiddleware);

app.get('/', (req, res) => {
  logger.info(`Received ${req.method} request for ${req.path}`);
  res.send('Hello, TS-Node-OpenAI-Express-API!');
});

// Apply error handler
app.use(errorHandler);

app.listen(env.PORT, () => {
  logger.info(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});