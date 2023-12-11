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
import {
  getCategories,
  getSubCategoryBasedOnParentId,
} from "../../../functions/categoryFunction.js";
import FileUpload from "../../../components/forms/FileUpload.js";
import { LoadingOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm.js";

const UpdatedProductPage = () => {
  const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subCategory: [],
    shipping: "",
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
      "MSI",
    ],
    color: "",
    brand: "",
  };
  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = useParams();
  const [SingleProductValues, setSingleProductValues] = useState(initialState);

  const LoadProduct = () => {
    getSingleProduct(slug).then((response) => {
      console.log(response);
      setSingleProductValues({ ...SingleProductValues, ...response.product });
    });
  };

  useEffect(() => {
    LoadProduct();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSingleProductValues({
      ...SingleProductValues,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, "------>", e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Update Product Form</h4>
          <hr />
          {JSON.stringify(SingleProductValues)}
          <ProductUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            SingleProductValues={SingleProductValues}
            setSingleProductValues={setSingleProductValues}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatedProductPage;
