import {v2 as cloudinary} from "cloudinary";

export const uploadImageToCloudinary = async(image) => {
    try {
        const { secure_url } = await cloudinary.uploader.upload(image.tempFilePath);
        return secure_url;
    } catch (error) {
        console.log(error);
        throw error;
    }
}