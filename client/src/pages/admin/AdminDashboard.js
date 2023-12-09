import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav.js";
import { getProductByCount } from "../../functions/ProductFunction.js";
import AdminProductCard from "../../components/Cards/AdminProductCard.js";

const AdminDashboard = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    loadProductByCount();
  }, []);

  const loadProductByCount = () => {
    setloading(true);
    getProductByCount(10)
      .then((res) => {
        console.log(res);
        setproducts(res);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          {loading ? (
            <h4 className="text-danger"> loading...!! </h4>
          ) : (
            <>
              <div className="col text-center">
                <div className="row">
                  <h4 className="mb-3">All Products !!!</h4>
                  {products.map((p) => (
                    <div key={p._id} className="col-md-4 mt-3">
                      <AdminProductCard product={p} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
