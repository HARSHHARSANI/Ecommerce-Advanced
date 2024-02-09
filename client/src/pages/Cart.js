import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCheckout = () => {};

  const handleCheckLogin = () => {
    navigate("/login", {
      state: location.pathname,
    });

    console.log(location.pathname);
  };

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  return (
    <div className="container-fluid">
      <div className="row ">Cart / {cart.length} products </div>
      <div className="row">
        <div
          className="col-md-8 pt-2 mt-2"
          style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          {!cart.length ? (
            <div>
              <h4>No products in the cart</h4>
              <Link to={"/shop"}>Continue Shopping</Link>
            </div>
          ) : (
            <div>
              show cart items
              <br />
            </div>
          )}
        </div>
        <div className="col-md-4">
          Order Summary
          <hr />
          products
          <div className="pt-2 mb-2 pb-2">
            {cart.map((cartitem) => (
              <div key={cartitem._id} className="pt-2 pb-2">
                {cartitem.title} X {cartitem.count} = $
                {cartitem.price * cartitem.count}
              </div>
            ))}
          </div>
          <hr />
          Total : <p>${getTotal()}</p>
          <hr />
          {user ? (
            <button
              onClick={handleCheckout}
              className="btn btn-primary"
              disabled={!cart.length}
            >
              Proceed To Checkout
            </button>
          ) : (
            <button onClick={handleCheckLogin} className="btn btn-primary">
              Login TO CheckOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
