import React, { useEffect, useState } from "react";
import {
  getSortedProducts,
  totalProducts,
} from "../../functions/ProductFunction";
import LoadingCard from "../Cards/LoadingCard";
import ProductCard from "../Cards/ProductCard";
import { Pagination } from "antd";

const BestSellers = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ProductsCount, setProductsCount] = useState(0);

  const loadAllProduct = () => {
    setLoading(true);
    ///sort ,order, limit
    getSortedProducts("sold", "desc", page).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, [page]);

  useEffect(() => {
    totalProducts().then((response) => setProductsCount(response.data.total));
  }, []);
  return (
    <>
      {JSON.stringify(ProductsCount)}
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
      <div className="row">
        <div className="col-md-4 offset-md-4 text-center p-3 pt-3">
          <Pagination
            current={page}
            total={Math.round((ProductsCount / 3) * 10)}
            onChange={(value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
};

export default BestSellers;
