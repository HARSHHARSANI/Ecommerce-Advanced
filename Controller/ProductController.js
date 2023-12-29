import ProductModel from "../Models/ProductModel.js";
import slugify from "slugify";
import userModel from "../Models/userModel.js";

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
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).send({
        success: false,
        message: "Error in Getting Product Name in updateProductController",
      });
    }
    const UpdatedProduct = await ProductModel.findOneAndUpdate(
      { slug },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(UpdatedProduct);
  } catch (error) {
    console.log("PRODUCT UPDATE ERROR", error);
    return res.status(400).send("PRODUCT UPDATE FAILED");
  }
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

///without pagination

// export const listOfProductsWithSortOrdersAndLimitController = async (
//   req,
//   res
// ) => {
//   try {
//     const { sort, order, limit } = req.body;
//     const products = await ProductModel.find({})
//       .populate("category")
//       .populate("subCategory")
//       .sort([[sort, order]])
//       .limit(limit)
//       .exec();

//     res.status(200).send(products);
//   } catch (error) {
//     console.log(error);
//   }
// };

///with pagination
export const listOfProductsWithSortOrdersAndLimitController = async (
  req,
  res
) => {
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3;
    const products = await ProductModel.find({})
      .skip((currentPage - 1) * perPage)
      .populate("category")
      .populate("subCategory")
      .sort([[sort, order]])
      .limit(perPage)
      .exec();

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

export const totalNoOfProductsController = async (req, res) => {
  try {
    // console.log("inside totalNoOfProductsController");
    const total = await ProductModel.estimatedDocumentCount().exec();
    // console.log("Sending Response from totalNoOfProductsController -->", total);
    res.status(200).send({ total });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

export const ProductStarReviewController = async (req, res) => {
  try {
    const { productId } = req.params;
    const user = await userModel.findOne({ email: req.user.email });
    const product = await ProductModel.findById(productId);
    const { star } = req.body;

    ///check if product exist
    if (!product) {
      return res.status(400).send({
        success: false,
        message: "Product Not found",
      });
    }

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User Not Found",
      });
    }

    //who is adding
    /// check if the currently logged in user has already given the rating to the product if yes then update the existing rating or give the new rating

    let existingRatingObject = ProductModel.rating.find(
      (ele) => ele.PostedBy.toString() === user._id.toString()
    );

    /// if user havent left any rating yet

    if (existingRatingObject === undefined) {
      let ratingAdded = await ProductModel.findByIdAndUpdate(
        productId,
        {
          $push: { rating: { star, PostedBy: user._id } },
        },
        { new: true }
      ).exec();
      console.log("ratingAdded", ratingAdded);
      res.json(ratingAdded);
    } else {
      ///if user already have left rating and want to update that
      const ratingUpdated = await ProductModel.updateOne(
        {
          rating: { $elemMatch: existingRatingObject },
        },
        { $set: { "rating.$.star": star } },
        { new: true }
      ).exec();
      console.log("ratingUpdated", ratingUpdated);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in ProductStarReviewController",
      error,
    });
  }
};
