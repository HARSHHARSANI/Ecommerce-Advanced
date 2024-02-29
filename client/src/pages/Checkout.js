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
import { applyCoupon } from "../functions/UserFunction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const [coupon, setCoupon] = useState("");
  const [userCartItems, setUserCartItems] = useState([]);
  const [userCartTotal, setUserCartTotal] = useState("");
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [totalAfterCoupon, settotalAfterCoupon] = useState("");
  const [discountError, setDiscountError] = useState("");

  const { cart, user, coupons } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveAddressToDb = (e) => {
    e.preventDefault();
    addUserAddress(user.token, address).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        setAddressSaved(true);
        toast.success("Address Saved Successfully", { position: "top-center" });
      }
    });
  };

  const applyDiscountCoupon = () => {
    console.log("Send Coupon to Backend", coupon);
    applyCoupon(coupon, user.token)
      .then((response) => {
        if (response && response.data.success === true) {
          settotalAfterCoupon(response.data.totalAfterDiscount);
          setUserCartTotal(response.data.totalAfterDiscount);
          dispatch({
            type: "COUPON_ADDED",
            payload: true,
          });
          setCoupon("");
          toast.success("discount Applied", { position: "top-center" });
        } else if (response.data.success === false) {
          toast.error(`${coupon} coupon has expired`, {
            position: "top-center",
          });
          dispatch({
            type: "COUPON_ADDED",
            payload: false,
          });
          setDiscountError(response.data.message);
          console.log(response.data.message);
          setCoupon("");
        }
      })
      .catch((error) => {
        console.error("Error applying coupon:", error);
        // Handle other errors if necessary
      });
  };

  useEffect(() => {
    if (user && user.token) {
      getUserCart(user.token)
        .then((response) => {
          console.log(response.data.success);
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
    if (coupons) {
      const answer = window.confirm(
        "If You empty the Cart , You might missout the coupon  discount"
      );
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
    } else {
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
    }
  };

  const showDeliveryAddress = () => (
    <>
      <h4>Delivery Address</h4>
      <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <br />
      <button className="btn btn-primary" onClick={saveAddressToDb}>
        Save
      </button>
      <hr />
    </>
  );

  const showApplyCouponSection = () => (
    <>
      <h4>Apply Coupon</h4>
      <br />
      <input
        type="text"
        placeholder="Coupon"
        name="coupon"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <br />
      <button
        className="btn btn-primary btn-block mt-2"
        onClick={applyDiscountCoupon}
      >
        Apply Coupon
      </button>
    </>
  );

  const handlePlaceOrder = async () => {
    try {
      console.log(window);
      const keyResponse = await axios.get("http://localhost:8080/api/getkey");
      const key = keyResponse.data;
      console.log("key", key);

      const {
        data: { order },
      } = await axios.post(
        "http://localhost:8080/api/v1/razorpay/create-payment-intent",
        {},
        {
          headers: {
            authtoken: user.token,
          },
        }
      );

      console.log(order);

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "Harsh Harsani",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        callback_url:
          "http://localhost:8080/api/v1/razorpay/paymentVerification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error in handlePlaceOrder:", error);
      // Handle error if necessary
    }
  };

  return (
    <>
      {/* {JSON.stringify(coupon)} */}
      {JSON.stringify(totalAfterCoupon)}
      {JSON.stringify(discountError)}
      <div className="row">
        <div className="col-md-6">
          {showDeliveryAddress()}
          {showApplyCouponSection()}
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
                onClick={handlePlaceOrder}
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
