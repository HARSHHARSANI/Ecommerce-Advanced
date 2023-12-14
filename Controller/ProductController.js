import ProductModel from "../Models/ProductModel.js";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    console.log(req.body);

    const {
      title,
      description,
      category,
      subCategory,
      price,
      quantity,
      images,
      shipping,
      brand,
      color,
    } = req.body;

    const slug = "";

    ///check if product already exist
    const productExist = await ProductModel.findOne({ slug });

    const product = await new ProductModel({
      title,
      slug: slugify(title),
      description,
      category,
      subCategory,
      price,
      quantity,
      images,
      shipping,
      brand,
      color,
    }).save();

    res.status(200).send({
      success: true,
      message: "Product Created",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in createProductController",
      error: error.message,
    });
  }
};
export const getAllProductsController = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).send({
      success: true,
      message: "All products Shown",
      count: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in getAllProductsController",
      error: error.message,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    return res.status(400).send({
      success: false,
      message: "No Product Name Found",
    });
  }

  const product = await ProductModel.findOne({ slug })
    .populate("category")
    .populate("subCategory")
    .exec();

  res.status(200).send({
    success: true,
    message: "Product Found",
    product,
  });
};

export const updateProductController = async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    return res.status(400).send({
      success: false,
      message: "Error in Getting Product Name in updateProductController",
    });
  }
  const product = ProductModel.findOneAndUpdate({ slug }, {});
};
export const deleteProductController = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(500).send({
        success: false,
        message: "Error in getting Product Name for Deletion",
      });
    }

    const product = await ProductModel.findOneAndDelete({ slug });

    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in deleteProductController",
      error,
    });
  }
};

export const getProductsLimitWiseController = async (req, res) => {
  try {
    const products = await ProductModel.find({})
      .limit(parseInt(req.params.count))
      .populate("category")
      .populate("subCategory")
      .sort([["createdAt", "desc"]])
      .exec();

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};
