import axios from "axios";

export const getCoupons = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API}/coupon/coupon`
  );

  console.log(response);
  return response;
};

export const createCoupon = async (couponsdata, authtoken) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/coupon/coupon`,
    { couponsdata },
    {
      headers: {
        authtoken,
      },
    }
  );

  console.log(response);
  return response;
};

export const deleteCoupon = async (id, authtoken) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API}/coupon/coupon/${id}`,
    {
      headers: {
        authtoken,
      },
    }
  );

  console.log(response);
  return response;
};
