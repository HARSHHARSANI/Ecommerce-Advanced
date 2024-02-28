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

export const createPaymentIntentRazorpay = async (authtoken) => {
  try {
    console.log("inside createPaymentIntentRazorpay");
    const response = await axios.post(
      `${process.env.REACT_APP_API}/razorpay/paymentOptions`,
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

export const verifyPaymentData = async (amount) => {};
