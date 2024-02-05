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
    return response.data;
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

export const getProductByCount = async (count) => {
  try {
    const productsByCount = await axios.get(
      `${process.env.REACT_APP_API}/product/products/${count}`
    );
    console.log(productsByCount);
    return productsByCount;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (slug, authtoken) => {
  try {
    const removedproduct = await axios.delete(
      `${process.env.REACT_APP_API}/product/product/${slug}`,
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("inside removeProduct", removedproduct);
    return removedproduct.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (slug, product, authtoken) => {
  try {
    const updatedProduct = await axios.put(
      `${process.env.REACT_APP_API}/product/product/${slug}`,
      product,
      {
        headers: {
          authtoken,
        },
      }
    );

    return updatedProduct;
  } catch (error) {
    console.log(error);
  }
};

export const getSortedProducts = async (sort, order, page) => {
  try {
    console.log("im inside getSortedProducts");
    const response = await axios.post(
      `${process.env.REACT_APP_API}/product/sortedProducts`,
      { sort, order, page }
    );

    console.log("Sending Response from getSortedProducts", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const totalProducts = async (req, res) => {
  console.log("inside totalProducts");
  const response = await axios.get(
    `${process.env.REACT_APP_API}/product/products/total`
  );
  console.log("Sending response from totalProducts", response);

  return response;
};

export const updateProductRating = async (productId, star, authtoken) => {
  try {
    const updatedProductRating = await axios.put(
      `${process.env.REACT_APP_API}/product/product/star/${productId}`,
      { star },
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("response form updateProductRating", updatedProductRating.data);
    return updatedProductRating;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedProducts = async (productId) => {
  try {
    const response = axios.get(
      `${process.env.REACT_APP_API}/product/products/related/${productId}`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = async (query) => {
  try {
    console.log("im inside searchProducts");
    const response = await axios.post(
      `${process.env.REACT_APP_API}/product/search/filters`,
      { query }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
