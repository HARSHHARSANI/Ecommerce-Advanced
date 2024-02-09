import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import laptop from "../../images/gaming laptop.jpg";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  return (
    <Drawer
      open={drawer}
      className="text-center "
      title={`Cart / ${cart.length} Products`}
      onClose={() => {
        ///side drawer
        dispatch({
          type: "SET_VISIBLE",
          payload: false,
        });
      }}
    >
      {" "}
      {cart.map((cartItem) => (
        <div className="row pb-3 mb-4 text-center " key={cartItem._id}>
          <div className="col">
            {cartItem.images[0] ? (
              <>
                <img
                  src={cartItem.images[0].url}
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />
                <p
                  className="text-center bg-secondary text-light  mt-2 "
                  style={{ textAlign: "center", justifyContent: "center" }}
                >
                  {cartItem.title} x {cartItem.count}
                </p>
              </>
            ) : (
              <>
                <img
                  src={laptop}
                  alt="laptopImage"
                  style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />{" "}
                <p className="text-center bg-secondary text-light  mt-2 ">
                  {cartItem.title} X {cartItem.count}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
      <Link
        to={"/cart"}
        className="text-center btn btn-primary btn-block d-block"
      >
        Add to Cart
      </Link>
    </Drawer>
  );
};

export default SideDrawer;
