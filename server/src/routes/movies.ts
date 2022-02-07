import express from 'express';
import { isAuthRes } from 'src/middleware/isAuthRes';
const router = express.Router();
// add controller
router.get('/', isAuthRes);
