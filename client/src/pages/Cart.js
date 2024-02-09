import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="row ">Cart / {cart.length} products </div>
      <div className="row">
        <div className="col-md-8">
          {!cart.length ? (
            <h4>No products in the cart</h4>
          ) : (
            <div>{JSON.stringify(cart)}</div>
          )}
        </div>
        <div className="col-md-4">adad</div>
      </div>
    </div>
  );
};

export default Cart;
