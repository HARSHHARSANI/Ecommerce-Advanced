import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductCardDuringCheckout from "./ProductCardDuringCheckout";
import { userCart } from "../functions/UserFunction";

const Cart = () => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(user);

  const handleCheckout = () => {
    try {
      userCart(cart, user.token).then((response) => {
        if (response.data.ok) {
          navigate("/checkout");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckLogin = () => {
    navigate("/login", {
      state: location.pathname,
    });

    // console.log(location.pathname);
  };

  const showCartItems = () => (
    <table class="table " style={{ border: "1px solid black" }}>
      <thead class="thead-dark">
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>price</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Count</th>
          <th>Shipping</th>
          <th>Remove</th>
        </tr>
      </thead>
      {cart.map((cartItem) => (
        <ProductCardDuringCheckout key={cartItem._id} product={cartItem} />
      ))}
    </table>
  );

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row mx-auto text fw-semibold mb-2 mt-2 fs-4">
          Cart / {cart.length} products{" "}
        </div>
        <div className="row">
          <div className="col-md-8 pt-2 mt-2">
            {!cart.length ? (
              <div>
                <h4>No products in the cart</h4>
                <Link to={"/shop"}>Continue Shopping</Link>
              </div>
            ) : (
              showCartItems()
            )}
          </div>
          <div className="col-md-4">
            <div
              className="order-summary-container"
              style={{ marginTop: "-30px" }}
            >
              <h4>Order Summary</h4>
              <hr />
              <div className="order-summary-content">
                <div className="pt-2 mb-2 pb-2">
                  {cart.map((cartitem) => (
                    <div key={cartitem._id} className="pt-2 pb-2">
                      {cartitem.title} X {cartitem.count} =₹
                      {cartitem.price * cartitem.count}
                    </div>
                  ))}
                </div>
                <hr />
                <p>Total: ₹ {getTotal()}</p>
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
                  <button
                    onClick={handleCheckLogin}
                    className="btn btn-primary"
                  >
                    Login TO CheckOut
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
