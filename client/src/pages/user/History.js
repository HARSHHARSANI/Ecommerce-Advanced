import React, { useEffect, useState } from "react";
import UserNav from "../../components/userNav";
import { getAllOrders } from "../../functions/orderFunctions";
import { useSelector } from "react-redux";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import toast from "react-toastify";

const History = () => {
  const [userOrders, setUserOrders] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getAllOrders(user.token).then((response) => {
      console.log(response.data);
      setUserOrders(response.data);
    });
  }, []);

  const showEachOrders = () => {
    return userOrders.map((order, i) => {
      return (
        <div key={i} className="m-5 p-3 card ">
          <p>
            Show payment info:{" "}
            <span className="fw-bold mx-3 ">Razorpay_Order_id :</span>{" "}
            {order.razorpay_order_id}{" "}
            <span className="fw-bold mx-3 ">Order Status : </span>{" "}
            {order.orderStatus}
          </p>
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <p>PDF Download</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const showOrderInTable = (order) => {
    return (
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>color</th>
            <th>Quantity</th>
            <th>Shipping</th>
            <th>Total Price</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((product, index) => (
            <tr key={index}>
              <td>{product.product?.title}</td>
              <td>{product.product?.description}</td>
              <td>₹{product.price ? product.price.toFixed(2) : ""}</td>
              <td>{product.color}</td> {/* Added color column */}
              <td>{product.count}</td>
              <td>
                {product.product?.shipping == "Yes" ? (
                  <CheckCircleOutlined style={{ color: "green" }} />
                ) : (
                  <CloseCircleOutlined style={{ color: "red" }} />
                )}
              </td>
              <td>
                {product.totalPrice && !isNaN(product.totalPrice)
                  ? (product.totalPrice / 100).toFixed(2)
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">Total:</td>
            <td>
              ₹
              {order.totalPrice && !isNaN(order.totalPrice)
                ? (order.totalPrice / 100).toFixed(2)
                : ""}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  };

  return (
    <>
      {/* {JSON.stringify(userOrders)} */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserNav />
          </div>
          <div className="col text-center ">
            <h4>
              {" "}
              {userOrders.length ? "User History Page" : "No Orders Yet"}
            </h4>
            {showEachOrders()}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
