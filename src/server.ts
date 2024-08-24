import express from 'express';
import env from './config/env';
import logger from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiterMiddleware } from './middleware/rateLimiter';
import openaiRoutes from './routes/openaiRoutes';

const app = express();

app.use(express.json());
app.use(rateLimiterMiddleware);

app.use('/api/openai', openaiRoutes);

app.get('/', (req, res) => {
  logger.info(`Received ${req.method} request for ${req.path}`);
  res.send('Hello, TS-Node-OpenAI-Express-API!');
});

app.use(errorHandler);

app.listen(env.PORT, () => {
  logger.info(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});