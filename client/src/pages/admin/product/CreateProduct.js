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
  const initialState = {
    title: "",
    description: "",
    price: "",
    category: "",
    subCategory: [],
    shipping: ["Yes", "No"],
    categories: [],
    quantity: "",
    images: ["Black", "Brown", "White", "Silver", "Blue"],
    colors: "",
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

  const handleSubmit = () => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Create Product Page</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={values.title}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
