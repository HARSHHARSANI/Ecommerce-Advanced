import slugify from "slugify";
import CategoryModel from "../Models/CategoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    ///check if no name
    if (!name) {
      return res.status(401).send({
        success: false,
        message: "Name is required for Creating Category",
        error,
      });
    }
    ///check if Category already Exist

    const ExistingCategory = await CategoryModel.findOne({ name });
    if (ExistingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Existed",
      });
    }

    const category = new CategoryModel({
      name: req.body.name,
      slug: slugify(name).toLowerCase(),
    }).save();

    res.status(201).send({
      success: true,
      message: `${name} Category Created`,
      category,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.body;

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
        message: `${categoryExist} category Found`,
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
    const { slug } = req.body;
    const category = await CategoryModel.findOneAndUpdate(
      { slug },
      {
        name: req.body.name,
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: `Error in updating ${slug} Category`,
    });
  }
};
export const deleteCategoryController = () => {};
