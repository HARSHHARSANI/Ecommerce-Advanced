import React from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import laptop from "../../images/default image.jpg";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove, handleUpdate }) => {
  ///destructure
  const { title, description, price, images, slug } = product;
  return (
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
        <Link to={`/admin/products/${slug}`}>
          <EditOutlined
            className="text-warning"
            onClick={() => {
              handleUpdate(slug);
            }}
          />
        </Link>,
        <DeleteOutlined
          className="text-danger"
          onClick={() => {
            handleRemove(slug);
          }}
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 80)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
