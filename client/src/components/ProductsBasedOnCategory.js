import React, { useEffect, useState } from "react";
import { getProductsBasedOnCategory } from "../functions/categoryFunction";
import { useParams } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const ProductsBasedOnCategory = () => {
  const [ProductsBasedOnCategory, setProductsBasedOnCategory] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    getProductsBasedOnCategory(slug).then((res) => {
      setProductsBasedOnCategory(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(ProductsBasedOnCategory)} */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {ProductsBasedOnCategory?.map((product, id) => (
          <div key={id} className="m-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsBasedOnCategory;
