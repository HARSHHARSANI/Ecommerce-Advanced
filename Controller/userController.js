import cartModel from "../Models/cartModel.js";
import userModel from "../Models/userModel.js";
import ProductModel from "../Models/ProductModel.js";

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
