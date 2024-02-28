import axios from "axios";

export const createPaymentIntent = async (authtoken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/stripe/create-payment-intent`,
      {},
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
