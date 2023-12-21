import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { getProductByCount } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";
import Jumbotron from "../components/Cards/Jumbotron";
import { Avatar, Card, Skeleton } from "antd";
import LoadingCard from "../components/Cards/LoadingCard";
const { Meta } = Card;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAllProduct = () => {
    setLoading(true);
    getProductByCount(10).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-danger font-weight-bold h1 text-center mb-5 mt-2">
          <Jumbotron
            text={["Latest Products", "New Arrivals", "Best Sellers"]}
          />
        </div>
      </div>
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

        {JSON.stringify(products)}
      </div>
    </>
  );
};

export default Home;
