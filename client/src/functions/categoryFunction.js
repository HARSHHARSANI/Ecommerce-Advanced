import axios from "axios";

export const getCategories = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/categories`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleCategories = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/category/category/${slug}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const createCategory = async (name, authtoken) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/category/category`,
      name,
      {
        headers: {
          authtoken,
        },
      }
    );
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
        header: {
          authtoken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateCategory = async (slug, name, authtoken) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/category/category/${slug}`,
      name,
      {
        header: {
          authtoken,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
