import React from "react";
import ModalImage from "react-modal-image";

const ProductCardDuringCheckout = ({ product }) => {
  const { title, price, images, count, color, brand, shipping } = product;
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
        <td>{color}</td>
        <td>{count}</td>
        <td>Shipping Icon</td>
        <td>Delete Icon</td>
      </tr>
    </tbody>
  );
};
export default ProductCardDuringCheckout;
