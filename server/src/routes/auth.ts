import express from 'express';
import { postRefreshToken } from '../controllers/authController';

const router = express.Router();
router.post('/refresh_token', postRefreshToken);

export default router;
