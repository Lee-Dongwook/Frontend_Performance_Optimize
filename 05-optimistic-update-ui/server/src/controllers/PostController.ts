import type { Request, Response } from 'express'; 
import PostModel from '../models/Post';

class PostController {
    public async getAllPosts(req: Request, res: Response): Promise<void> {
        try {
            const posts = await PostModel.find();
            res.json(posts);
        } catch(error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    public async createPost(req: Request, res: Response): Promise<void> {
        try {
            const newPost = new PostModel(req.body);
            const savedPost = await newPost.save();
            res.json(savedPost);
        } catch(error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export default PostController;