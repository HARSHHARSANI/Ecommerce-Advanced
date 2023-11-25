import slugify from "slugify";
import SubCategoryModel from "../Models/SubCategoryModel";

export const createSubCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const slug = slugify(name);
    const parent = req.body;

    if (!name) {
      return res.status(500).send({
        success: false,
        message: "No Name in createSubCategoryController",
      });
    }
    if (!parent) {
      return res.status(500).send({
        success: false,
        message: "No Parent Category Name in createSubCategoryController",
      });
    }

    const ExistSubCategory = await SubCategoryModel.findOne({ slug });

    if (ExistSubCategory) {
      return res.status(200).send({
        success: false,
        message: "SubCategory Already Exist",
      });
    }

    const SubCategory = new SubCategoryModel({
      name: req.body.name,
      slug: slugify(name).toLowerCase(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Creating SubCategory",
      error,
    });
  }
};
