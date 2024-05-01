import express from 'express';
import { create } from '../../controllers/tweet-controller.js'; // Import the `create` function

const router = express.Router();

router.post('/tweets', create); // Use the `create` function for POST /tweets route

export default router;
