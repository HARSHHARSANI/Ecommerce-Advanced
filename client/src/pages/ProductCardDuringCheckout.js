import React from "react";
import ModalImage from "react-modal-image";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const ProductCardDuringCheckout = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, images, count, color, brand, shipping, quantity } =
    product;

  const colors = ["Black", "Brown", "White", "Silver", "Blue"];

  const handleColorChange = (e) => {
    console.log("color changed", e.target.value);

    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((p, i) => {
        if (p._id === product._id) {
          cart[i].color = e.target.value;
        }
      });

      console.log("update cart value", cart);

      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleQuantityChange = (e) => {
    console.log(quantity);

    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > quantity) {
      toast.error(`Max available quantity ${quantity}`);
      return;
    }

    let cart = [];

    if (typeof window != undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((cartItem, i) => {
        if (cartItem._id === product._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    let cart = [];

    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((cartItem, i) => {
        if (cartItem._id === product._id) {
          // Remove the item at index i from the cart array
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            {images.length > 0 ? (
              <ModalImage
                small={images[0].url}
                large={images[0].url}
                alt={title}
              />
            ) : (
              "No Image Found"
            )}
          </div>
        </td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{brand}</td>
        <td>
          <select
            onChange={handleColorChange}
            className="form-control"
            name="color"
          >
            {color ? (
              <option value={color}>{color}</option>
            ) : (
              <option>Select</option>
            )}
            {colors
              .filter((c) => c !== color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </td>
        <td className="text-center ">
          <input
            type="number"
            value={count}
            onChange={handleQuantityChange}
            className="form-control"
          />
        </td>
        <td>
          {shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success text-center " />
          ) : (
            <CloseCircleOutlined className="text-danger text-center " />
          )}
        </td>
        <td>
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger text-center "
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    </tbody>
  );
};
export default ProductCardDuringCheckout;
