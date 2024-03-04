import axios from "axios";

export const getAllOrdersForAdmin = async (authtoken) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/admin/allorders`,
      {
        headers: {
          authtoken,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getOrderStatus = async (authtoken, data) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/admin/allorders/order-status`,
      {
        data,   
      },
      {
        headers: {
          authtoken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
