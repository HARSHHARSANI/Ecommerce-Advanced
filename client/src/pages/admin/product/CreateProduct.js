import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createProduct,
  getproducts,
  getSingleProduct,
} from "../../../functions/ProductFunction.js";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm.js";
import SearchForm from "../../../components/forms/SearchForm.js";

const CreateProduct = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const initialState = {
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: [],
    shipping: ["Yes", "No"],
    categories: [],
    quantity: "",
    images: [],
    colors: ["Black", "Brown", "White", "Silver", "Blue"],
    brands: [
      "Apple",
      "Microsoft",
      "Lenovo",
      "Asus",
      "Dell",
      "Hp",
      "Jio",
      "Samsung",
    ],
    color: "",
    brand: "",
  };

  const [values, setvalues] = useState(initialState);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) toast.error(error.response.data);
      });
  };
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name, "------>", e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Create Product Page</h4>
          {JSON.stringify(values)}
          <hr />
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
                {" "}
                <option>Please Select</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
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
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
