import cartModel from "../Models/cartModel.js";
import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";

// export const createOrderController = async (req, res) => {
//   try {
//     const userEmail = req.user.email;
//     const user = await userModel.find({ email: userEmail });

//     if (!user) {
//       return res.status(500).json({
//         success: false,
//         message: "No User Found",
//       });
//     }

//     //find cart of the user
//     const cart = await cartModel.find({ orderdBy: user._id });

//     if (!cart) {
//       return res.status(400).json({
//         success: false,
//         meesage: "No Cart Found",
//       });
//     }

//     // Map the products in the cart to the required format
//     const productsInOrder = cart.products.map((product) => ({
//       product: product.product,
//       count: product.count,
//       color: product.color,
//       price: product.price,
//     }));

//     const order = new orderModel({
//       orderdBy: user._id,
//       products: productsInOrder,
//       totalPrice: Math.round((cart.totalAfterDiscount || cart.cartTotal) * 100),
//       razorpay_order_id: razorpayOrder.id,
//     });

//     await order.save();

//     console.log("New Order Saved", order);

//     const userCartDeleted = await cartModel.findOneAndDelete({
//       orderdBy: user._id,
//     });
//   } catch (error) {}
// };

export const getAllOrderController = async (req, res) => {
  try {
    const userEmail = req.user.email;

    const user = await userModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "No User Found",
      });
    }

    const userId = user._id.toString();

    const userOrders = await orderModel
      .find({ orderdBy: userId })
      .populate("products.product");

    console.log("userOrders", userOrders);

    return res.status(200).json(userOrders);
  } catch (error) {
    console.log(error);
  }
};
