import express from 'express';
import {getHomePage} from '../controllers/PathLogic.js'
const router = express.Router();

router.get('/', getHomePage);

// router.post('/query',getQuery);

export default router;
