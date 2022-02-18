import express from 'express';
import { getGenres } from '../controllers/movieController';
import { isAuthRes } from '../middleware/isAuthRes';
const router = express.Router();
// add controller
router.get('/genres', isAuthRes, getGenres);

export default router;
