import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
import {
  getAllOrdersForAdmin,
  getOrderStatus,
} from "../../functions/AdminFunction";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  // Define the order status options based on the enum values
  const orderStatusOptions = [
    "Not Processed",
    "Processing",
    "Dispatched",
    "Cancelled",
    "Completed",
  ];

  useEffect(() => {
    getAllOrdersForAdmin(user.token).then((response) => {
      console.log(response.data);
      // Set the orders received from the API response
      setOrders(response.data);
    });
  }, []);

  const handleOrderAction = async (orderId, selectedStatus) => {
    console.log("Handling action for order:", orderId);
    try {
      const data = { orderId, orderStatus: selectedStatus };
      const response = await getOrderStatus(user.token, data);
      console.log("Order status updated:", response.data);

      // Update the order status in the frontend state
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status: selectedStatus } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const renderOrders = () => {
    return orders.map((order, index) => (
      <tr key={index}>
        <td>{order._id}</td>
        <td>{order.orderdBy.name}</td>
        <td>{(order.totalPrice / 100).toFixed(2)}</td>
        <td>
          <select
            value={order.status} // Use the order's status
            className="form-control"
            onChange={(e) => handleOrderAction(order._id, e.target.value)}
          >
            {/* Render order status options */}
            {orderStatusOptions.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </td>
        <td>
          {/* Update the onClick handler to pass order status */}
          <button
            className="btn btn-primary"
            onClick={() => handleOrderAction(order._id, order.status)}
          >
            Update Status
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>

          <div className="col">
            <h2>Admin Dashboard</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Ordered By</th>
                  <th>Total Price</th>
                  <th>Order Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{renderOrders()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
