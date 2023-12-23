import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../functions/ProductFunction";
import { getSubCategoryBasedOnParentId } from "../functions/categoryFunction";
import SingleProductCard from "../components/Cards/SingleProductCard";

const SingleProductPage = () => {
  const initialState = {
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: [],
    shipping: "",
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "White", "Silver", "Blue"],
    brands: [
      "Apple",
      "Microsoft",
      "Lenovo",
      "Asus",
      "Dell",
      "Hp",
      "Jio",
      "Samsung",
      "MSI",
    ],
    color: "",
    brand: "",
  };
  const { slug } = useParams();

  const [SingleProductValues, setSingleProductValues] = useState(initialState);

  const loadSingleProduct = () => {
    getSingleProduct(slug).then((response) => {
      console.log(response);
      ///load single product
      setSingleProductValues({ ...SingleProductValues, ...response.product });
    });
  };

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  return (
    <>
      <div className="conatainer">
        <div className="row pt-4">
          <SingleProductCard product={SingleProductValues} />
        </div>

        <div className="row">
          <div>Related Products</div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
