import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  ///destructure
  const { title, description, price, images } = product;
  return (
    <Card
      hoverable
      style={{ width: 360 }}
      cover={
        <img alt="example" src={images && images.length ? images[0].url : ""} />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;
