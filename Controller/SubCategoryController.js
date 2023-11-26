import slugify from "slugify";
import SubCategoryModel from "../Models/SubCategoryModel";

export const createSubCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name);

    ///check if no name
    if (!name) {
      return res.status(401).send({
        success: false,
        message: "Name is required for Creating Sub Category",
      });
    }

    ///check if Sub Category already Exist
    const ExistingSubCategory = await SubCategoryModel.findOne({ slug });
    if (ExistingSubCategory) {
      return res.status(200).send({
        success: true,
        message: "Sub Category Already Existed",
      });
    }

    const category = new SubCategoryModel({
      name: req.body.name,
      slug: slug.toLowerCase(),
    });

    await category.save();

    res.status(201).send({
      success: true,
      message: `${name} Sub Category Created`,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in createSubCategoryController",
      error,
    });
  }
};

export const getSingleSubCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.status(400).send({
        success: false,
        message: "Slug is Required in getting Sub Category",
      });
    }

    const categoryExist = await SubCategoryModel.findOne({ slug });

    if (categoryExist) {
      res.status(200).send({
        success: true,
        message: `category Found`,
        categoryExist,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Sub Category Doesnt Exist",
        error,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error IN  getSingleSubCategoryController",
      error,
    });
  }
};

export const getAllSubCategoryController = async (req, res) => {
  try {
    const subCategories = await SubCategoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All categories shown",
      count: subCategories.length,
      subCategories,
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

export const updateSubCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;
    const subCategory = await SubCategoryModel.findOneAndUpdate(
      { slug },
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Sub Category Updated Successfully",
      subCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: `Error in updateSubCategoryController`,
    });
  }
};
export const deleteSubCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await SubCategoryModel.findOneAndDelete({ slug });
    res.status(200).send({
      success: true,
      message: "Sub Category Deleted Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In deleteSubCategoryController",
      error,
    });
  }
};
