import axios from "axios";

export const getCategories = async () => {
  try {
    console.log("im inside getCategories");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/categories`
    );
    console.log("Sending response from getCategories", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleCategories = async (slug) => {
  try {
    console.log("i am inside getSingleCategories");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/category/${slug}`
    );
    console.log("Sending response from getSingleCategories", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const createCategory = async (name, authtoken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/category/category`,
      { name },
      {
        headers: {
          authtoken,
        },
      }
    );
    // console.log("createCategory response :->", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const removeCategory = async (slug, authtoken) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/category/category/${slug}`,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("Remove CAtegory Response :->", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateCategory = async (slug, name, authtoken) => {
  try {
    console.log("inside updateCategory");
    const response = await axios.put(
      `${process.env.REACT_APP_API}/category/category/${slug}`,
      name,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("returing response from updateCategory", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategoryBasedOnParentId = async (_id) => {
  try {
    console.log("i am inside getSubCategoryBasedOnParentId");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/category/subcategory/${_id}`
    );
    console.log(
      "Sending response from getSubCategoryBasedOnParentId",
      response
    );
    return response;
  } catch (error) {
    console.log("error -------->", error.message);
  }
};

export const getProductsBasedOnCategory = async (slug) => {
  try {
    console.log("im inside getProductsBasedOnCategory");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/categoryproducts/${slug}`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
