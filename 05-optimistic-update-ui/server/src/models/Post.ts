import mongoose, {Schema, type Document} from 'mongoose';
interface IPost extends Document {
  title: string;
  content: string;   
}

const PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

const PostModel = mongoose.model<IPost>('Post', PostSchema);

export default PostModel;