import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

//config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//if we are using formdata we have to use req.files.file.path
export const uploadController = async (req, res) => {
  try {
    let result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto", ///jpeg , png
    });
    res.send({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeController = (req, res) => {
  try {
    let image_id = req.body.public_id;
    cloudinary.uploader.destroy(image_id, (err, result) => {
      if (err) {
        return res.json({ success: false, err });
      }
      res.json("ok deleted");
    });
  } catch (error) {
    console.log(error);
  }
};
