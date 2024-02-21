import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import {
  getCoupons,
  createCoupon,
  deleteCoupon,
  getSingleCoupon,
  updateCoupon,
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
  const [SingleCouponData, setSingleCouponData] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllTheCoupons();
  }, []);

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
        toast.error("Coupon Deleted Successfully", {
          position: "top-center",
        });
        loadAllTheCoupons();
      });
    }
  };

  return (
    <>
      {JSON.stringify(name)}
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

              <div className="mt-3 ">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Coupon</th>
                      <th>Expiry</th>
                      <th>Discount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcoupon.map((coupon) => (
                      <tr key={coupon._id}>
                        <td>{coupon.name}</td>
                        <td>{new Date(coupon.expiry).toLocaleDateString()}</td>
                        <td>{coupon.discount} %</td>
                        <td>
                          <DeleteOutlined
                            className="text-danger "
                            onClick={() => handleDeleteCoupon(coupon._id)}
                          />
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
