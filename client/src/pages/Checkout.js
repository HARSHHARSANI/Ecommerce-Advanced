import React, { useEffect, useState } from "react";
import {
  getUserCart,
  deleteUserCart,
  addUserAddress,
} from "../functions/UserFunction";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Checkout = () => {
  const [coupon, setCoupon] = useState("");
  const [userCartItems, setUserCartItems] = useState([]);
  const [userCartTotal, setUserCartTotal] = useState("");
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const saveAddressToDb = (e) => {
    e.preventDefault();
    addUserAddress(user.token, address).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        setAddressSaved(true);
        toast.success("Address Saved Successfully", { position: "top-center" });
      }
    });
  };

  const handleCoupon = () => {};

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  useEffect(() => {
    if (user && user.token) {
      getUserCart(user.token)
        .then((response) => {
          console.log(response.data);
          if (response && response.data) {
            setUserCartItems(response.data.products);
            setUserCartTotal(response.data.cartTotal);
          } else {
            console.error("Invalid response format:", response);
          }
        })
        .catch((error) => {
          console.error("Error fetching user cart:", error);
        });
    }
  }, [user]);

  const handleEmptyCart = () => {
    const answer = window.confirm("Do you Really want to Empty the cart??");
    if (answer) {
      deleteUserCart(user.token).then((response) => {
        dispatch({
          type: "ADD_TO_CART",
          payload: [],
        });

        window.localStorage.removeItem("cart");
        setUserCartItems([]);
        setUserCartTotal("");

        toast.success(response.data.message, { position: "top-center" });
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h4>Delivery Address</h4>
          {/* <textarea
            name="address"
            id=""
            cols="30"
            rows="6"
            className="w-100"
            value={address}
            onChange={() => setAddress(e.target.value)}
          /> */}
          <ReactQuill theme="snow" value={address} onChange={setAddress} />
          <br />
          <button className="btn btn-primary" onClick={saveAddressToDb}>
            Save
          </button>
          <hr />
          <h4>Apply Coupon</h4>
          <br />
          <input
            type="text"
            placeholder="Coupon"
            name="coupon"
            value={coupon}
            onChange={handleCouponChange}
          />
          <button
            className="btn btn-primary btn-block mt-1"
            onClick={handleCoupon}
          >
            Apply Coupon
          </button>
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <hr />
          <p>Products {userCartItems.length}</p>
          <hr />
          {userCartItems.map((cartItem) => (
            <div key={cartItem._id} style={{ display: "flex" }}>
              <p className="mx-1 fw-bold">Title: {cartItem.product.title}</p>
              <p className="mx-1 fw-bold">Quantity: {cartItem.count}</p>
              <p className="mx-1 fw-bold">Colour: {cartItem.color}</p>
              <p className="mx-1 fw-bold">
                Total: {cartItem.count * cartItem.price}
              </p>
            </div>
          ))}
          <hr />
          <p className="mx-1 fw-bold">Cart Total: {userCartTotal}</p>
          <div className="row">
            <div className="col-md-6">
              <button
                className="btn btn-primary btn-block"
                disabled={!addressSaved || !userCartItems.length}
              >
                Place Order
              </button>
            </div>
            <div className="col-md-6">
              <button
                disabled={!userCartItems.length}
                className="btn btn-danger btn-block"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
