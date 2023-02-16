import express from 'express';
import { getPosts, newPost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', newPost)

export default router;