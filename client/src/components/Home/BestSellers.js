import React, { useEffect, useState } from "react";
import { getSortedProducts } from "../../functions/ProductFunction";
import LoadingCard from "../Cards/LoadingCard";
import ProductCard from "../Cards/ProductCard";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAllProduct = () => {
    setLoading(true);
    ///sort ,order, limit
    getSortedProducts("sold", "desc", 3).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={6} />
        ) : (
          <div className="row">
            {products &&
              products.map((product) => (
                <div className="col-md-4" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BestSellers;
