export const allimagesController = async (req, res) => {
  try {
    const response = {
      123456789: {
        ImageURL:
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/706c66103003811.5f43ca98674fe.jpg",
        Count: "5",
      },
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
