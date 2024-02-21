import couponModel from "../Models/couponModel.js";

export const createCouponController = async (req, res) => {
  try {
    const { couponsdata } = req.body;
    console.log(couponsdata);
    const { name, expiry, discount } = couponsdata;
    console.log(name);
    console.log(expiry);
    console.log(discount);

    if (!name || !expiry || !discount) {
      return res.status(400).send({
        success: false,
        message: "Please FullFill all the data",
      });
    }

    const newCoupon = await new couponModel({
      name,
      expiry,
      discount,
    }).save();

    return res.status(200).json(newCoupon);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in createCouponController",
      error,
    });
  }
};

export const getCouponController = async (req, res) => {
  try {
    const coupons = await couponModel.find({});
    return res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in getCouponController",
      error,
    });
  }
};

export const deleteCouponController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: "No Coupon Found",
      });
    }

    const requiredCouponId = await couponModel.findByIdAndDelete(id);

    return res.status(200).json(requiredCouponId);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in deleteCouponController",
      error,
    });
  }
};

export const updateCouponController = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedData } = req.body;
    const { name, discount, expiry } = updatedData;
    const updatedCoupon = await couponModel.findByIdAndUpdate(id, {
      name: req.body.name || name,
      expiry: req.body.expiry || expiry,
      discount: req.body.discount || discount,
    });

    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCouponContrller = async (req, res) => {
  try {
    const { id } = req.params;
    const coupon = await couponModel.findOne({ _id: id });
    return res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
  }
};
