import React, { useEffect, useState } from "react";
import UserNav from "../../components/userNav";
import { getAllOrders } from "../../functions/orderFunctions";
import { useSelector } from "react-redux";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import toast from "react-toastify";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const History = () => {
  const [userOrders, setUserOrders] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getAllOrders(user.token).then((response) => {
      console.log(response.data);
      setUserOrders(response.data);
    });
  }, []);

  const generateInvoicePDF = (order) => {
    const MyDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Invoice for Order ID: {order._id}</Text>
            <Text>Date: {order.createdAt}</Text>
            <Text>Customer: {user.email}</Text>
            <Text>--------------------------</Text>
            <Text>Products:</Text>
            <View>
              {order.products.map((product, index) => (
                <Text key={index}>
                  {product.product?.title} - ₹{product.price.toFixed(2)}
                </Text>
              ))}
            </View>
            <Text>Total Price: ₹{(order.totalPrice / 100).toFixed(2)}</Text>
          </View>
        </Page>
      </Document>
    );

    return (
      <PDFDownloadLink
        document={MyDocument}
        fileName={`invoice_${order._id}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    );
  };

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
            <div className="col text-center">
              <p>{generateInvoicePDF(order)}</p>
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
            <h4 className="mt-4 " style={{ marginBottom: " -15px" }}>
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
