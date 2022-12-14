import { v2 as cloudinary } from 'cloudinary'

export const uploadImageToCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    })

    const imageResult = await cloudinary.uploader.upload('./sample.png', {
      public_id: 'sample_id',
    })

    return imageResult
  } catch (error) {
    return error
  }
}
