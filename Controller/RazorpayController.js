import { instance } from "../server.js";

export const razorpaycontroller = async (req, res) => {
  try {
    const order = await instance.orders.create({
      amount: Number(req.body.amount * 100),
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    });

    console.log(order);
    res.status(200).send({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const razorpayPaymentVerification = async () => {};
