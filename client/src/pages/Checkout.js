import React, { useState } from "react";

const Checkout = () => {
  const [coupon, setCoupon] = useState("");

  const saveAddressToDb = () => {};
  const handleCoupon = () => {};
  const handleCouponChange = (e) => {
    // console.log(e.target.value);
    setCoupon(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Dilevery Address</h4>
        <br />
        <br />
        <textarea name="address" id="" cols="30" rows="6" className="w-100 ">
          {" "}
        </textarea>
        <br />
        <button className="btn btn-primary " onClick={saveAddressToDb}>
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
          className="btn btn-primary btn-block d-block "
          onClick={handleCoupon}
        >
          Apply Coupon
        </button>
      </div>
      <div className="col-md-6">
        <h4>order Summary</h4>
        <hr />
        <p>Products</p>
        <hr />
        List Of products
        <hr />
        <p>Cart Total : $x</p>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary btn-block d-block ">
              place Order
            </button>
          </div>
          <div className="col-md-6">
            <div className="col-md-6">
              <button className="btn btn-danger  btn-block d-block ">
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
