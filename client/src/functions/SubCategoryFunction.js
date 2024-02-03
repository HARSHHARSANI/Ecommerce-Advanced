import axios from "axios";

export const getSubCategories = async (req, res) => {
  try {
    console.log("im inside getSubCategories");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/subcategory/subcategory`
    );
    console.log("Sending response from getSubCategories", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleSubCategories = async (slug) => {
  try {
    console.log("i am inside getSingleCategories");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/subcategory/subcategory/${slug}`
    );
    console.log("Sending response from getSingleSubCategories", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const createSubCategory = async (data, authtoken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/subcategory/subcategory`,
      data,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("createSubCategory response :->", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const removeSubCategory = async (slug, authtoken) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/subcategory/subcategory/${slug}`,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("removeSubCategory Response :->", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateSubCategory = async (slug, data, authtoken) => {
  try {
    console.log("inside updateCategory");
    const response = await axios.put(
      `${process.env.REACT_APP_API}/subcategory/subcategory/${slug}`,
      data,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("returing response from updateSubCategory", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsBasedOnSubcategory = async (slug) => {
  try {
    console.log("im inside getProductsBasedOnSubcategory");

    const response = await axios.get(
      `${process.env.REACT_APP_API}/subcategory/subcategoryProducts/${slug}`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
