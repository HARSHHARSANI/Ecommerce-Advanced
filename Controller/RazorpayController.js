import { instance } from "../server.js";
import cartModel from "../Models/cartModel.js";
import userModel from "../Models/userModel.js";
import crypto from "crypto";
import axios from "axios";

const generateTransactionId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 100000);
  const merchantPrefix = "T";
  const TransactionId = `${merchantPrefix}${timestamp}${randomNum}`;
  return TransactionId;
};

export const razorpaycontroller = async (req, res) => {
  try {
    const userEmail = req.user.email;

    // Finding user based on email
    const user = await userModel.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Finding user's cart
    const cart = await cartModel.findOne({ orderdBy: user._id });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const data = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: generateTransactionId(),
      merchantUserId: "MUID123",
      // name: user.name,
      amount: cart.totalAfterDiscount || cart.cartTotal,
      redirectUrl: cart.totalAfterDiscount
        ? "https://google.com"
        : "https://google.com",
      redirectMode: "REDIRECT",
      callbackUrl: cart.totalAfterDiscount
        ? "https://google.com"
        : "https://google.com",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const options = {
      method: "post",
      url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },

      data: payloadMain,
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};
