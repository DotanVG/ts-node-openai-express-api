import { Request, Response, NextFunction } from 'express';
import openaiService from '../services/openaiService';
import { AppError } from '../middleware/errorHandler';
import logger from '../utils/logger';

export const generateText = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      throw new AppError('Prompt is required', 400);
    }
    
    const generatedText = await openaiService.generateText(prompt);
    res.json({ result: generatedText });
  } catch (error) {
    logger.error('Error in generateText controller:', error);
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};