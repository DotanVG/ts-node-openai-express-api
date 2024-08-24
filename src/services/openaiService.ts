import OpenAI from 'openai';
import env from '../config/env';
import logger from '../utils/logger';

class OpenAIService {
  private openai: OpenAI;

  constructor() {
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

      return completion.choices[0].message.content || 'No response generated';
    } catch (error) {
      logger.error('Error generating text with OpenAI:', error);
      throw new Error('Failed to generate text');
    }
  }

  // TODO: Implement methods for DALL-E and Whisper
}

export default new OpenAIService();