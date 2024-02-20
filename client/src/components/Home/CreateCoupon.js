import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getCoupons,
  createCoupon,
  deleteCoupon,
} from "../../functions/couponFunction";
import AdminNav from "../AdminNav";
import { DeleteOutlined } from "@ant-design/icons";
import CouponForm from "../forms/CouponForm";

const CreateCoupon = () => {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(false);
  const [allcoupon, setAllcoupon] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllTheCoupons();
  }, [user]);

  const loadAllTheCoupons = () => {
    getCoupons().then((response) => {
      console.log(response.data);
      setAllcoupon(response.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const couponsdata = {
      name,
      expiry,
      discount,
    };

    createCoupon(couponsdata, user.token).then((response) => {
      console.log(response.data);
      toast.success("Coupon Created Successfully", { position: "top-center" });
      setName("");
      setExpiry("");
      setDiscount("");
      loadAllTheCoupons();
    });
  };

  const handleDeleteCoupon = (_id) => {
    let answer = window.confirm(`Do You really want to delete this coupon`);
    // console.log(_id);
    if (answer) {
      deleteCoupon(_id, user.token).then((response) => {
        console.log(response.data);
        loadAllTheCoupons();
      });
    }
  };

  const handleSelected = (_id) => {
    console.log(_id);
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col-md-10 fw-bold ">
            <div className="col">
              <h4>Create Coupons</h4>
              <CouponForm
                name={name}
                setName={setName}
                expiry={expiry}
                setExpiry={setExpiry}
                discount={discount}
                setDiscount={setDiscount}
                handleSubmit={handleSubmit}
              />

              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Coupon</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcoupon.map((coupon) => (
                      <tr key={coupon._id}>
                        <td onClick={handleSelected(coupon._id)}>
                          {coupon.name}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteCoupon(coupon._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCoupon;
