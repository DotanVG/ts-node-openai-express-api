import dotenv from 'dotenv';
import { cleanEnv, str, port } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  PORT: port({ default: 3000 }),
  OPENAI_API_KEY: str(),
  // Add more environment variables as needed
});

export default env;