import axios from "axios";

export const getproducts = async (req, res) => {
  try {
    console.log("im inside getproducts");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/product/products`
    );
    console.log("Sending Response from getproducts", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (slug) => {
  try {
    console.log("im inside getSingleProduct");
    const response = await axios.get(
      `${process.env.REACT_APP_API}/product/product/${slug}`
    );
    console.log("sending response from getSingleProduct", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product, authtoken) => {
  try {
    console.log("inside createProduct");
    const response = await axios.post(
      `${process.env.REACT_APP_API}/product/product`,
      product,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("createProduct response :->", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
