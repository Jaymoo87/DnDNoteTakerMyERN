import { Router } from 'express';
import notesRouter from './notes';
import gptRouter from './gpt';

const router = Router();

router.use('/notes', notesRouter);
router.use('/gpt', gptRouter);

export default router;
