import express from "express";
import 'dotenv/config';
import cors from 'cors'
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import { connectDB } from './config/db.js';
import { autorRoutes, libroRoutes } from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

//Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use('/api/libro', libroRoutes);
app.use('/api/autor', autorRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    connectDB();
})