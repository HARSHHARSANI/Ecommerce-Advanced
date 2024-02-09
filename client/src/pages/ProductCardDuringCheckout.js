import React from "react";
import ModalImage from "react-modal-image";
import { useDispatch } from "react-redux";

const ProductCardDuringCheckout = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, images, count, color, brand, shipping } = product;

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
        <td>{count}</td>
        <td>Shipping Icon</td>
        <td>Delete Icon</td>
      </tr>
    </tbody>
  );
};
export default ProductCardDuringCheckout;
