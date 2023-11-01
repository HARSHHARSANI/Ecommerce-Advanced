import slugify from "slugify";
import CategoryModel from "../Models/CategoryModel.js";

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
        error,
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
      success: true,
      message: "All categories shown",
      count: categories.length,
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

    await CategoryModel.findOneAndDelete({ slug });
    res.status(200).send({
      success: true,
      messsage: "Category Deleted Succesfully",
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
