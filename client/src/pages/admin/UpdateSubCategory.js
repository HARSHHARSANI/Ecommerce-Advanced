import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  getSingleSubCategories,
  updateSubCategory,
} from "../../functions/SubCategoryFunction.js";
import { getCategories } from "../../functions/categoryFunction.js";
import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "../../components/forms/CategoryForm.js";

const UpdateSubCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const [parent, setparent] = useState("");
  const navigate = useNavigate();

  const { slug } = useParams();

  const loadCategories = () => {
    getCategories().then((response) => {
      console.log(response);
      setCategories(response.data.categories);
    });
  };

  const loadSingleSubCategory = () => {
    getSingleSubCategories(slug).then((response) => {
      console.log(response);
      setName(response.data.categoryExist.name);
      setparent(response.data.categoryExist.parent);
    });
  };

  useEffect(() => {
    loadCategories();
    loadSingleSubCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateSubCategory(slug, { name, parent }, user.token)
      .then((response) => {
        setLoading(false);
        setName("");
        console.log("API Response:", response);
        if (response && response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          console.error("Invalid response format:", response);
        }
        navigate("/admin/subcategory");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data);
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <h4>Update SubCategory Page</h4>

          <div className="form-group">
            <label>Parent Category</label>
            <select
              name="category"
              className="form-control mb-3"
              onChange={(e) => setparent(e.target.value)}
              required
            >
              <option value="">Please Select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <CategoryForm
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSubCategory;
