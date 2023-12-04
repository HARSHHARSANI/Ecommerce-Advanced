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
import CreateProductForm from "../../../components/forms/CreateProductForm.js";
import { getCategories } from "../../../functions/categoryFunction.js";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  const loadCategories = () => {
    getCategories().then((response) => {
      console.log(response);
      setvalues({ ...values, categories: response.data });
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const initialState = {
    title: "Macbook Pro",
    description: "This is best Apple product",
    price: "4500",
    categories: [],
    category: "",
    subCategory: [],
    shipping: "Yes",
    quantity: "50",
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
    color: "White",
    brand: "Apple",
  };

  const [values, setvalues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((response) => {
        console.log(response);
        toast.success(`${values.title} Created Successfully`);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
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
          <hr />

          {/* {JSON.stringify(values.categories)} */}

          <CreateProductForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
