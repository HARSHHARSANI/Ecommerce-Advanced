import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  SingleProductValues,
  setSingleProductValues,
  handleCategoryChange,
  subOption,
  showSub,
  categories,
  arraysOfSubCategory,
  setArraysOfSubCategory,
}) => {
  ///destructuring
  const {
    title,
    description,
    price,
    shipping,
    category,
    subCategory,
    quantity,
    colors,
    brands,
    color,
    brand,
    images,
  } = SingleProductValues;

  // console.log(SingleProductValues);
  // console.log(categories);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control mt-2"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control mt-2"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control mt-2"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label>Brands</label>
        <select
          name="brand"
          value={brand}
          className="form-control mt-2"
          onChange={handleChange}
        >
          <option>Please Select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label>Category</label>
        {categories.categories && categories.categories.length > 0 ? (
          <select
            name="category"
            className="form-control mb-3"
            onChange={handleCategoryChange}
            required
          >
            <option>{category ? category.name : "Please Select"} </option>
            {categories.categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Sub Categories</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please Select"
          value={arraysOfSubCategory}
          onChange={(value) => setArraysOfSubCategory(value)}
        >
          {subOption.length &&
            subOption.map((subcategory) => (
              <Option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </Option>
            ))}
        </Select>
      </div>

      <div className="form-group mb-3">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control mt-2"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label>Colors</label>
        <select
          name="color"
          value={color}
          className="form-control mt-2"
          onChange={handleChange}
        >
          {" "}
          <option>Please Select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label>Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          className="form-control mt-2"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="btn btn-outline-info" onClick={handleSubmit}>
        Save
      </div>
    </form>
  );
};

export default ProductUpdateForm;
