import axios from "axios";

export const getAllOrders = async (authtoken) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API}/orders/allOrders`,
    {
      headers: {
        authtoken,
      },
    }
  );

  return response;
};
