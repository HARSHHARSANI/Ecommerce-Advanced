import axios from "axios";

export const userCart = async (cart, authtoken) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/product/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

  // console.log("response from userCart", response);

  return response;
};
