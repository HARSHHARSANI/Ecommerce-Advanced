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

export const createProduct = (data, authtoken) => {
  try {
      console.log("inside createProduct");
      
  } catch (error) {
    console.log(error);
  }
};
