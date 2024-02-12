import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/AdminNav.js";
import { getProductByCount } from "../../../functions/ProductFunction.js";
import AdminProductCard from "../../../components/Cards/AdminProductCard.js";
import { removeProduct } from "../../../functions/ProductFunction.js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadProductByCount();
  }, []);

  const loadProductByCount = () => {
    setloading(true);
    getProductByCount(10)
      .then((res) => {
        // console.log(res.data);
        setproducts(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = (slug) => {
    let answer = window.confirm("Delete?");
    if (answer) {
      // console.log("Send Delete Request", slug);
      removeProduct(slug, user.token)
        .then((response) => {
          loadProductByCount();
          toast.error(`${response.product.title} is deleted`);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Product Removed Failed", error);
        });
    }
  };

  const handleUpdate = (slug) => {};

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
                    <div key={p._id} className="col-md-4 mt-5">
                      <AdminProductCard
                        product={p}
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdate}
                      />
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

export default AllProducts;
