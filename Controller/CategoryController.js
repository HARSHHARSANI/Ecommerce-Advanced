import slugify from "slugify";
import CategoryModel from "../Models/CategoryModel.js";
import SubCategoryModel from "../Models/SubCategoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name);
    ///check if no name
    if (!name) {
      return res.status(401).send({
        success: false,
        message: "Name is required for Creating Category",
      });
    }

    ///check if Category already Exist
    const ExistingCategory = await CategoryModel.findOne({ slug });
    if (ExistingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Existed",
      });
    }

    const category = new CategoryModel({
      name: req.body.name,
      slug: slugify(name).toLowerCase(),
    });

    await category.save();

    res.status(201).send({
      success: true,
      message: `${name} Category Created`,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in createCategoryController",
      error,
    });
  }
};

export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      res.status(401).send({
        success: false,
        message: "Name is Required in getting Category",
        error,
      });
    }

    const categoryExist = await CategoryModel.findOne({ slug });

    if (categoryExist) {
      res.status(200).send({
        success: true,
        message: `category Found`,
        categoryExist,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Category Doesnt Exist",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      msessage: "Error IN getting Single Category",
      error,
    });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(200).send({
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error IN getting All Categories",
    });
  }
};
export const updateCategoryConrtoller = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;
    const category = await CategoryModel.findOneAndUpdate(
      { slug },
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: `Error in updating Category`,
    });
  }
};
export const deleteCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await CategoryModel.findOneAndDelete({ slug });
    res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In deleteCategoryController",
      error,
    });
  }
};

export const getSubCategoryBasedOnCategoryId = async (req, res) => {
  try {
    console.log("Received _id:", req.params._id);

    console.log("im inside getSubCategoryBasedOnCategoryId");

    const subcategory = await SubCategoryModel.find({
      parent: req.params._id,
    })
    .exec();

    res.status(200).send({
      subcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};
