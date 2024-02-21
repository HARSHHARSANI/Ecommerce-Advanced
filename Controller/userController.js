import cartModel from "../Models/cartModel.js";
import userModel from "../Models/userModel.js";
import ProductModel from "../Models/ProductModel.js";
import couponModel from "../Models/couponModel.js";

export const postUserCartDetailsController = async (req, res) => {
  try {
    const { cart } = req.body;

    // if (cart.length < 1) {
    //   return res.status(400).send("No Product Found");
    // }

    let products = [];

    console.log("This is cart ", cart);

    const user = await userModel.findOne({ email: req.user.email });
    console.log(user);
    ///check if cartwith loggedIn user already Exists

    let cartExistByThisUser = await cartModel.findOne({ orderdBy: user._id });
    console.log("Cart found:", cartExistByThisUser);

    if (cartExistByThisUser) {
      await cartModel.findOneAndDelete({ orderdBy: user._id });
      console.log("Removed old cart");
    }

    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;
      ///get price for creating total

      let { price } = await ProductModel.findById(cart[i]._id)
        .select("price")
        .exec();

      object.price = price;
      products.push(object);
    }
    console.log("products", products);

    let cartTotal = 0;

    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }

    console.log("cartTotal", cartTotal);
    const userCart = await new cartModel({
      products,
      cartTotal,
      orderdBy: user._id,
    }).save();
    console.log(userCart);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error,
      success: false,
    });
  }
};

export const getUserCartController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    console.log("user from getUserCartController ", user);

    const cartItems = await cartModel
      .findOne({ orderdBy: user._id })
      .populate("products.product");

    console.log("cartItems Of Users", cartItems);

    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error in getUserCartController",
      error,
    });
  }
};

export const deleteUserCartController = async (req, res) => {
  try {
    console.log("im inside deleteUserCartController");
    const user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    console.log(user);
    const cartItems = await cartModel.findOneAndRemove({ orderdBy: user._id });

    if (!cartItems) {
      return res
        .status(404)
        .json({ success: false, message: "No cart items found for this user" });
    }

    console.log("cartItems deleted Successfully", cartItems);
    res.status(200).json({
      success: true,
      message: "Cart Successfully Deleted , Continue Shopping",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error deleting cart",
      error: error.message,
    });
  }
};

export const postUserAddressController = async (req, res) => {
  try {
    const { address } = req.body;
    if (address === "") {
      return res.status(200).json({
        success: false,
        message: "no address found",
      });
    }
    const user = await userModel.findOneAndUpdate(
      { email: req.user.email },
      {
        address,
      },
      { new: true }
    );
    console.log("address updated successfully", user);
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in postUserAddressController",
    });
  }
};

export const postCouponController = async (req, res) => {
  try {
    const { coupon } = req.body;

    if (coupon === "") {
      return res.status(400).send({
        success: false,
        message: "No Coupon Found",
      });
    }
    //// check if coupon is valid or expired
  } catch (error) {
    console.log(error);
  }
};

export const applyCouponToUserCart = async (req, res) => {
  try {
    const { coupon } = req.body;

    console.log("Couponssss ---->", coupon);
    const validCoupon = await couponModel.findOne({ name: coupon });

    if (!validCoupon) {
      return res.status(200).json({
        success: false,
        message: "Invalid Coupon",
      });
    }
    const user = await userModel.findOne({ email: req.user.email });
    console.log(user);
    const { products, cartTotal } = await cartModel
      .findOne({
        orderdBy: user._id,
      })
      .populate("products.product", "_id title price");

    console.log(
      "cartTotal --->",
      cartTotal,
      "discount % --->",
      validCoupon.discount
    );

    const totalAfterDiscount = (
      cartTotal -
      (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);

    await cartModel.findOneAndUpdate(
      { orderdBy: user._id },
      { totalAfterDiscount },
      { new: true }
    );

    return res.status(200).json({
      totalAfterDiscount,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
