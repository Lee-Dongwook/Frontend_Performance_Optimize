import express, { type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/Post';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI!).then(() => console.log('mongodb connected...'));

app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})