import React from "react";
import { Card } from "antd";
import laptop from "../../images/default image.jpg";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const { Meta } = Card;

const SingleProductCard = ({ product }) => {
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
      <div className="col-md-7">
        <Carousel showArrows={true} autoPlay infiniteLoop>
          {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
        </Carousel>
      </div>
      <div className="col">
        <Card
          actions={[
            <Link to={`/`}>
              <HeartOutlined className="text-success" onClick={() => {}} />
              <br />
              Add to Wishlist
            </Link>,
            <>
              <ShoppingCartOutlined
                className="text-success"
                onClick={() => {}}
              />
              <br />
              Add to Cart ,
            </>,
          ]}
        >
          <Meta
            title={title}
            description={`${description && description.substring(0, 80)}...`}
          />
          <p>
            price / category / shipping / color / brand / quantity / available /
            sold
          </p>
        </Card>
      </div>
    </>
  );
};

export default SingleProductCard;
