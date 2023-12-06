import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const CreateProductForm = ({
  handleSubmit,
  handleChange,
  values,
  handleCategoryChange,
  subOption,
  showSub,
  setvalues,
}) => {
  ///destructuring
  const {
    title,
    description,
    price,
    shipping,
    categories,
    category,
    subCategory,
    quantity,
    colors,
    brands,
    color,
    brand,
    images,
  } = values;

  console.log(values);
  // console.log(subOption);

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
            <option value="">Please Select</option>
            {categories.categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      {showSub && (
        <div>
          <label htmlFor="">Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please Select"
            value={subCategory}
            onChange={(value) => setvalues({ ...values, subCategory: value })}
          >
            {subOption.length &&
              subOption.map((subcategory) => (
                <Option key={subcategory._id} value={subcategory._id}>
                  {subcategory.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

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
          name="shipping"
          className="form-control mt-2"
          onChange={handleChange}
        >
          <option>Please Select</option>
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

export default CreateProductForm;
