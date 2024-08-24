import express from 'express';
import { generateText, generateImage } from '../controllers/openaiController';

const router = express.Router();

router.post('/generate-text', generateText);
router.post('/generate-image', generateImage);

export default router;