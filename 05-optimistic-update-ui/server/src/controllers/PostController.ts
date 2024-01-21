class PostController {
    async getAllPosts(req: Request, res: Response) {
        try {
            const posts = await PostModel.find();
            res.json(posts);
        } catch(error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = PostController;