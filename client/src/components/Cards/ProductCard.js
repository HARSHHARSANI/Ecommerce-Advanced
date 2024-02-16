import { Card, Tooltip, Badge } from "antd";
import React, { useState } from "react";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import laptop from "../../images/default image.jpg";
import { AverageRating } from "../../functions/AverageRating";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState("Add To Cart");
  const {
    title,
    images,
    slug,
    description,
    price,
    category,
    subCategory,
    quantity,
    shipping,
    color,
    brand,
  } = product;

  const { cart } = useSelector((state) => ({ ...state }));

  const handleAddToCart = () => {
    ///create cart array
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.push({
        ...product,
        count: 1,
      });

      ///remove the dublicatte
      const unique = _.uniqWith(cart, _.isEqual);
      ///save to localStorage
      localStorage.setItem("cart", JSON.stringify(unique));

      setTooltip("Added");

      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });

      ///side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  return (
    <>
      <div>
        {product && product.rating && product.rating.length > 0 ? (
          AverageRating(product)
        ) : (
          <div className="text-center pt-1 pb-3"> No Rating Yet</div>
        )}
      </div>

      <Card
        hoverable
        style={{ width: 360 }}
        cover={
          <img
            alt="example"
            src={images && images.length ? images[0].url : laptop}
            style={{ objectFit: "contain", height: "250px" }}
            className="p-1"
          />
        }
        actions={[
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Link to={`/products/${slug}`}>
              <EyeOutlined className="text-warning" />
              <br />
              View Product
            </Link>
          </div>,

          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined
                className="text-danger"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <br />
              Add to Cart
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{title}</span>
              <span style={{ marginLeft: "auto" }}>${price}</span>
            </div>
          }
          description={`${description && description.substring(0, 80)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
