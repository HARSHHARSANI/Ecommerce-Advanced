import axios from "axios";

export const getSubCategories = async (req, res) => {
  try {
    console.log("im inside getCategories");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/subcategory`
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
      `${process.env.REACT_APP_API}/category/subcategory/${slug}`
    );
    console.log("Sending response from getSingleSubCategories", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const createSubCategory = async (name, authtoken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/category/subcategory`,
      { name },
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
      `${process.env.REACT_APP_API}/category/subcategory/${slug}`,
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
export const updateSubCategory = async (slug, name, authtoken) => {
  try {
    console.log("inside updateCategory");
    const response = await axios.put(
      `${process.env.REACT_APP_API}/category/subcategory/${slug}`,
      name,
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
