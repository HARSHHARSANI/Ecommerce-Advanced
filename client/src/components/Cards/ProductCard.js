import { Card } from "antd";
import React from "react";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import laptop from "../../images/default image.jpg";
import { AverageRating } from "../../functions/AverageRating";
const { Meta } = Card;

const ProductCard = ({ product }) => {
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
            style={{ objectFit: "cover", height: "150px" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/products/${slug}`}>
            <EyeOutlined className="text-warning" onClick={() => {}} />
            <br />
            View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" onClick={() => {}} />
            <br />
            Add to Cart
          </>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 80)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
