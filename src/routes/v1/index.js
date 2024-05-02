import express from 'express';
import { create } from '../../controllers/tweet-controller.js'; // Import the `create` function
import {toggleLike}  from '../../controllers/like-controller.js'

const router = express.Router();

router.post('/tweets', create); // Use the `create` function for POST /tweets route

router.post('/likes/toggle',toggleLike)

export default router;
