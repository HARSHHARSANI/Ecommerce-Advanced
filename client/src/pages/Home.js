import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Cards/Jumbotron";
import NewArrivals from "../components/Home/NewArrivals";
import BestSellers from "../components/Home/BestSellers";

const Home = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-danger font-weight-bold h1 text-center mb-5 mt-2 ">
          <Jumbotron
            text={["Latest Products", "New Arrivals", "Best Sellers"]}
          />
        </div>
      </div>
      <h4 className="text-center p-3 mt-4 mb-5 display-3 bg-dark-subtle">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-4 mb-5 display-3 bg-dark-subtle">
        Best Sellers
      </h4>

      <BestSellers />
    </>
  );
};

export default Home;
