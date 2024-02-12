import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  updateProductRating,
} from "../functions/ProductFunction";
import { getSubCategoryBasedOnParentId } from "../functions/categoryFunction";
import SingleProductCard from "../components/Cards/SingleProductCard";
import { useSelector } from "react-redux";
import { getRelatedProducts } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";

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
    rating: [],
  };
  const { slug } = useParams();
  const { user } = useSelector((state) => ({ ...state }));

  const [SingleProductValues, setSingleProductValues] = useState(initialState);
  const [star, setstar] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState(null);

  const loadSingleProduct = () => {
    getSingleProduct(slug).then((response) => {
      // console.log(response);
      ///load single product
      setSingleProductValues({ ...SingleProductValues, ...response.product });

      getRelatedProducts(response?.product?._id).then((res) => {
        // console.log(res);
        setRelatedProducts(res.data);
      });
    });
  };

  useEffect(() => {
    loadSingleProduct();
  }, [slug]);

  useEffect(() => {
    const existingRatingObject = SingleProductValues?.rating?.find(
      (ele) => ele.postedBy.toString() === user.id.toString()
    );

    if (existingRatingObject) {
      setstar(existingRatingObject.star);
    }
  }, [SingleProductValues.rating, user]);

  const onStarClick = (newRating, name) => {
    // console.table(newRating, name);
    setstar(newRating);
    updateProductRating(name, newRating, user.token).then((response) => {
      console.log("response from updateProductRating", response);
      loadSingleProduct(); /// if we want to show the rating in real time
    });
  };

  return (
    <>
      {/* {JSON.stringify(SingleProductValues)} */}
      <div className="conatainer">
        <div className="row pt-4">
          <SingleProductCard
            product={SingleProductValues}
            onStarClick={onStarClick}
            star={star}
          />
        </div>

        <div className="row h3 p-5 flex-row">
          <div className="col text-center pt-1 pb-1">Related Products</div>
        </div>
        <div className="row pb-5">
          {" "}
          {relatedProducts &&
            relatedProducts.map((product) => {
              return (
                <div className="col-md-4 mx1 p-3" key={product._id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
