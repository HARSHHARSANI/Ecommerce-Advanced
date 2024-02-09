import React, { useState } from "react";
import { Card, Tabs, Tooltip, Badge } from "antd";
import laptop from "../../images/default image.jpg";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductListItems from "./ProductListItems";
import RatingModel from "../../models/RatingModel";
import StarRatings from "react-star-ratings";
import { AverageRating } from "../../functions/AverageRating";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const { Meta } = Card;
const { TabPane } = Tabs;

const SingleProductCard = ({ product, onStarClick, star }) => {
  const { title, images, description, _id } = product;

  const { user, cart } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState("Add To Cart");

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
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card
            cover={
              <img alt="example" src={laptop} className="mb-3 card-image" />
            }
          ></Card>
        )}
        <Tabs type="card">
          <TabPane tab="description" key={1} className="h5">
            {description && description}
          </TabPane>
          <TabPane tab="More" key={2} className="fw-bold h5">
            Contact Us on harshharsani007@gmail.com for any other info
          </TabPane>
        </Tabs>
      </div>
      <div className="col-md-5">
        <h1 className="text-bg-info">{title}</h1>
        {product && product.rating && product.rating.length > 0 ? (
          AverageRating(product)
        ) : (
          <div className="text-center pt-1 pb-3"> No Rating Yet</div>
        )}
        <Card
          actions={[
            <Link to={`/`}>
              <HeartOutlined className="text-success" onClick={() => {}} />
              <br />
              Add to Wishlist
            </Link>,
            <>
              {" "}
              <Tooltip title={tooltip}>
                <a onClick={handleAddToCart}>
                  <ShoppingCartOutlined
                    className="text-danger"
                    onClick={() => {}}
                  />
                  <br />
                  Add to Cart
                </a>
              </Tooltip>
            </>,
            <>
              <RatingModel>
                <StarRatings
                  classname="text-danger"
                  name={_id}
                  numberOfStars={5}
                  rating={star}
                  changeRating={onStarClick}
                  isSelectable={true}
                  asdasdasd
                  starRatedColor="red"
                />
              </RatingModel>
            </>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProductCard;
