export const allimagesController = async (req, res) => {
  try {
    const response = {
      "123456789": {
        "imageURL":
          "https://firebasestorage.googleapis.com/v0/b/netflix-fbca8.appspot.com/o/youtube%20ad.png?alt=media&token=e341bf44-fc3d-483c-bd76-5925d4a7697d",
        "count": 5,
      },
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
