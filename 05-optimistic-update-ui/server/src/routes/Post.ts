import express from 'express';
import PostController from '../controllers/PostController';

const router = express.Router();
const postController = new PostController();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);

export default router;

