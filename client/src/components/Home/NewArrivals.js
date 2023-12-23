import React, { useEffect, useState } from "react";
import {
  getSortedProducts,
  totalProducts,
} from "../../functions/ProductFunction";
import ProductCard from "../Cards/ProductCard";
import LoadingCard from "../Cards/LoadingCard";
import { Pagination } from "antd";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [ProductsCount, setProductsCount] = useState(0);

  const loadAllProduct = () => {
    setLoading(true);
    ///sort ,order, limit
    getSortedProducts("createdAt", "desc", page).then((res) => {
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
      <Pagination
        current={page}
        total={Math.round((ProductsCount / 3) * 10)}
        onChange={(value) => setPage(value)}
      />
    </>
  );
};

export default NewArrivals;
