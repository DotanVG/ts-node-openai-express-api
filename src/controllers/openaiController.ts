import { Request, Response, NextFunction } from 'express';
import openaiService from '../services/openaiService';
import { AppError } from '../middleware/errorHandler';

export const generateText = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      throw new AppError('Prompt is required', 400);
    }
    
    const generatedText = await openaiService.generateText(prompt);
    res.json({ result: generatedText });
  } catch (error) {
    next(error);
  }
};