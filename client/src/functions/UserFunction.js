import axios from "axios";

export const userCart = async (cart, authtoken) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/user/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

  console.log("response from userCart", response);

  return response;
};

export const getUserCart = async (authtoken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/user/user/cart`,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserCart = async (authtoken) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/user/user/cart`,
      {
        headers: {
          authtoken,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
