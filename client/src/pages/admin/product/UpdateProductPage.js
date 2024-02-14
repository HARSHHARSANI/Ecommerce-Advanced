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
import { updateProduct } from "../../../functions/ProductFunction.js";
import { useNavigate } from "react-router-dom";

const UpdatedProductPage = () => {
  const initialState = {
    title: "",
    description: "",
    price: "",
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
  const [subOption, setsubOption] = useState([]);
  const [showSub, setshowSub] = useState(false);
  const [SingleProductValues, setSingleProductValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);
  const [arraysOfSubCategory, setArraysOfSubCategory] = useState([]);

  const navigate = useNavigate();

  const LoadProduct = () => {
    getSingleProduct(slug).then((response) => {
      // console.log(response);
      ///load single product
      setSingleProductValues({ ...SingleProductValues, ...response.product });

      getSubCategoryBasedOnParentId(response.product.category._id).then(
        (res) => {
          // console.log(res);
          setsubOption(res.data.subcategory); // on first load show default subCategory
        }
      );
      let arr = [];
      response.product.subCategory.map((s) => {
        arr.push(s._id);
      });
      setArraysOfSubCategory((prev) => arr);
      // console.log("arraysOfSubCategory", arr);
    });
  };

  const loadCategories = () => {
    getCategories().then((response) => {
      // console.log(response);
      setcategories(response.data);
    });
  };

  useEffect(() => {
    LoadProduct();
    loadCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    SingleProductValues.subCategory = arraysOfSubCategory;
    // SingleProductValues.category  ;

    updateProduct(slug, SingleProductValues, user.token)
      .then((res) => {
        setLoading(false);
        toast.success(`${res.data.title} is updated`, {
          position: "top-center",
        });
        navigate("/admin/products");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSingleProductValues({
      ...SingleProductValues,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.name, "------>", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    // console.log("Clicked Category", e.target.value);
    setSingleProductValues({
      ...SingleProductValues,
      subCategory: [],
      category: e.target.value,
    });

    getSubCategoryBasedOnParentId(e.target.value).then((res) => {
      // console.log("SubOptions On getSingleCategoryBasedOnParentId", res);
      setsubOption(res.data.subcategory);
    });

    setArraysOfSubCategory([]);
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
            <h4>Create update Page</h4>
          )}
          <hr />
          {/* {JSON.stringify(SingleProductValues)} */}

          <div className="p-3">
            <FileUpload
              values={SingleProductValues}
              setvalues={setSingleProductValues}
              setLoading={setLoading}
            />
          </div>

          <ProductUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            SingleProductValues={SingleProductValues}
            setSingleProductValues={setSingleProductValues}
            handleCategoryChange={handleCategoryChange}
            subOption={subOption}
            showSub={showSub}
            categories={categories}
            arraysOfSubCategory={arraysOfSubCategory}
            setArraysOfSubCategory={setArraysOfSubCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatedProductPage;
