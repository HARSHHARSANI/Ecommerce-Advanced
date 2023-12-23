import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
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
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Title</span>
          <span className="label label-default label-pill">{title}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Price</span>
          <span className="label label-default label-pill"> ${price}</span>
        </li>

        {category && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Category</span>
            <Link
              to={`/category/${category.slug}`}
              className="label label-default label-pill"
            >
              {category.name}
            </Link>
          </li>
        )}

        {subCategory && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Sub Category</span>
            <span className="label label-default label-pill">
              {subCategory.map((s) => (
                <Link to={`/subcategory/${s.slug}`} key={s.id}>
                  {s.name} {"  "}
                </Link>
              ))}
            </span>
          </li>
        )}

        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Available</span>
          <span className="label label-default label-pill">{quantity}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Sold</span>
          <span className="label label-default label-pill">{quantity}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Sold</span>
          <span className="label label-default label-pill">{brand}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Shipping</span>
          <span className="label label-default label-pill">{shipping}</span>
        </li>
      </ul>
    </>
  );
};

export default ProductListItems;
