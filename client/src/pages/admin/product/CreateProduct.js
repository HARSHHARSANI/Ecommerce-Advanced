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

const CreateProduct = () => {
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
  const [values, setvalues] = useState(initialState);
  const [subOption, setsubOption] = useState([]);
  const [showSub, setshowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadCategories = () => {
    getCategories().then((response) => {
      // console.log(response);
      setvalues({ ...values, categories: response.data });
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((response) => {
        // console.log(response);
        toast.success(`${values.title} Created Successfully`, {
          position: "top-center",
        });
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      });
  };
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, "------>", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    // console.log("Clicked Category", e.target.value);
    setvalues({
      ...values,
      category: e.target.value,
      subCategory: [],
    });
    getSubCategoryBasedOnParentId(e.target.value).then((res) => {
      // console.log("SubOptions On getSingleCategoryBasedOnParentId", res);
      console.log(res);
      setsubOption(res.data.subcategory);
    });
    setshowSub(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          {loading ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
            <h4>Create Product Page</h4>
          )}
          <hr />

          {/* {JSON.stringify(values.categories)} */}

          {/* {JSON.stringify(values.images)} */}

          <div className="p-3">
            <FileUpload
              values={values}
              setvalues={setvalues}
              setLoading={setLoading}
            />
          </div>

          <CreateProductForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            setvalues={setvalues}
            handleCategoryChange={handleCategoryChange}
            subOption={subOption}
            showSub={showSub}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
