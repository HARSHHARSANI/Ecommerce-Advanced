import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    alignItems: "center",
    height: 24,
    textAlign: "center",
  },
  tableHeader: {
    fontWeight: "bold",
  },
  tableCell: {
    flex: 1,
  },
});

const ShowPdfDocument = ({ order }) => (
  <PDFDownloadLink
    document={<PdfDocument order={order} />}
    fileName={`invoice_${order._id}.pdf`}
    className="btn btn-sm btn-block btn-outline-primary"
  >
    Download Pdf
  </PDFDownloadLink>
);

const PdfDocument = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Order ID: {order._id}</Text>
        <Text>Order Status: {order.orderStatus}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Title</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>
              Description
            </Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Price</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Color</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Quantity</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Shipping</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>
              Total Price
            </Text>
          </View>
          {order.products.map((product, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{product.product?.title}</Text>
              <Text style={styles.tableCell}>
                {product.product?.description}
              </Text>
              <Text style={styles.tableCell}>₹{product.price.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{product.color}</Text>
              <Text style={styles.tableCell}>{product.count}</Text>
              <Text style={styles.tableCell}>
                {product.product?.shipping === "Yes" ? "Yes" : "No"}
              </Text>
              <Text style={styles.tableCell}>
                ₹{(product.totalPrice / 100).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
        <Text>Total Price: ₹{(order.totalPrice / 100).toFixed(2)}</Text>
      </View>
    </Page>
  </Document>
);

export default ShowPdfDocument;
