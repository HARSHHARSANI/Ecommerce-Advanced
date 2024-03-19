export const allimagesController = async (req, res) => {
  try {
    const response = {
      123456789: {
        ImageURL:
          "https://drive.google.com/file/d/13Wm3jwcDsXHqMQLm1JYJ_IB5MUvrX-8_/view?usp=sharing",
        Count: "5",
      },
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
