import express from 'express';
import PostController from '../controllers/PostController';

const router = express.Router();
const postController = new PostController();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;

