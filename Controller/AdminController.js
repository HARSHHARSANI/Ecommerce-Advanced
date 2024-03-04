import orderModel from "../Models/orderModel.js";

export const getAllTheOrdersForAdminController = async (req, res) => {
  try {
    const allOrders = await orderModel
      .find({})
      .sort("-createdAt")
      .populate({
        path: "orderdBy",
        select: "name email",
      })
      .populate("products.product");

    console.log("allOrders from getAllTheOrdersForAdminController", allOrders);

    return res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

export const orderStatusController = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body.data;

    const updated = await orderModel
      .findByIdAndUpdate(orderId, { orderStatus }, { new: true })
      .populate("orderdBy", "name email address");

    return res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, error });
  }
};
