import express from 'express';
import { create, getTweet } from '../../controllers/tweet-controller.js'; // Import the `create` function
import {toggleLike}  from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js';
import { signup,login } from '../../controllers/user-controller.js';
import { authenticate } from '../../middlwares/authenticate.js';

const router = express.Router();

router.post('/tweets',authenticate, create); // Use the `create` function for POST /tweets route
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments',authenticate,createComment)

router.post('/signup',signup)

router.post('/login',login)

export default router;
