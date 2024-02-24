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

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createPaymentIntentRazorpay = async (authtoken, amount) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/razorpay/paymentOptions`,
      { amount },
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
