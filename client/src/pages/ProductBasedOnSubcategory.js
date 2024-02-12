import React, { useEffect, useState } from "react";
import { getProductsBasedOnSubcategory } from "../functions/SubCategoryFunction";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";

const ProductBasedOnSubcategory = () => {
  const { slug } = useParams();
  const [ProductBasedOnSubcategory, setProductBasedOnSubcategory] = useState(
    []
  );

  useEffect(() => {
    getProductsBasedOnSubcategory(slug).then((res) => {
      // console.log(res);
      setProductBasedOnSubcategory(res.data);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
        {ProductBasedOnSubcategory?.map((product, id) => (
          <div style={{ margin: "7px", padding: "5px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBasedOnSubcategory;
