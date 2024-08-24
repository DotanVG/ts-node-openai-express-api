import OpenAI from 'openai';
import env from '../config/env';
import logger from '../utils/logger';
import { AppError } from '../middleware/errorHandler';

class OpenAIService {
  private openai: OpenAI;

  constructor() {
    if (!env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set in the environment variables');
    }
    this.openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
  }

  async generateText(prompt: string): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      if (!completion.choices[0].message?.content) {
        throw new AppError('No response generated from OpenAI', 500);
      }

      return completion.choices[0].message.content;
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        logger.error('OpenAI API Error:', error);
        if (error.status === 401) {
          throw new AppError('Invalid OpenAI API key', 500);
        } else if (error.status === 429) {
          throw new AppError('OpenAI rate limit exceeded', 500);
        } else {
          throw new AppError(`OpenAI API error: ${error.message}`, 500);
        }
      } else {
        logger.error('Unexpected error in OpenAI service:', error);
        throw new AppError('Unexpected error occurred', 500);
      }
    }
  }

  // TODO: Implement methods for DALL-E and Whisper
}

export default new OpenAIService();