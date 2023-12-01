import ProductModel from "../Models/ProductModel";

export const createProductController = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      category,
      subcategory,
      price,
      quantity,
      images,
      shipping,
      brand,
    } = req.body;

    ///check if product already exist
    const productExist = await ProductModel.findOne({ slug });

    if (
      !title ||
      !description ||
      !category ||
      !subcategory ||
      !price ||
      !quantity ||
      !brand ||
      !shipping ||
      !images
    ) {
      return res.status(400).send({
        success: false,
        message: "InSufficient Details in createProductController",
      });
    }

    const product = new ProductModel({
      title,
      slug,
      description,
      category,
      subcategory,
      price,
      quantity,
      images,
      shipping,
      brand,
    }).save();

    res.status(200).send({
      success: true,
      message: "Product Created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in createProductController",
      error,
    });
  }
};
export const getAllProductsController = async (req, res) => {
  try {
    const products = ProductModel.find({});
    res.status(200).send({
      success: true,
      message: "All products Shown",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error in getAllProductsController",
    });
  }
};

export const getSingleProductController = async (req, res) => {
  const { slug } = req.body;

  if (!slug) {
    return res.status(400).send({
      success: false,
      message: "No Product Name Found",
    });
  }

  const product = await ProductModel.findOne({ slug });

  res.status(200).send({
    success: true,
    message: "Product Found",
    product,
  });
};

export const updateProductController = async (req, res) => {
  //     const { slug } = req.params;
  //     const {}
  //   if (!slug) {
  //     return res.status(400).send({
  //       success: false,
  //       message: "Error in Getting Product Name in updateProductController",
  //     });
  //   }
  //   const product = ProductModel.findOneAndUpdate({ slug }, {});
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
    res.status(500).send({
      success: false,
      message: "Error in deleteProductController",
      error,
    });
  }
};
