import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createSubCategory,
  getSubCategories,
  getSingleSubCategories,
  removeSubCategory,
} from "../../functions/SubCategoryFunction.js";
import { getCategories } from "../../functions/categoryFunction.js";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CategoryForm from "../../components/forms/CategoryForm.js";
import SearchForm from "../../components/forms/SearchForm.js";

const UpdateSubCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const [subCategories, setSubCategories] = useState([]);
  ///searching / Filtering
  const [keyword, setkeyword] = useState("");
  const [category, setCategory] = useState("");

  const loadCategories = () => {
    getCategories().then((response) => {
      console.log(response);
      setCategories(response.data.categories);
    });
  };

  const loadSingleSubCategory = () => {
    getSingleSubCategories(slug).then((response) => {
      console.log(response);
      setSubCategories(response.data.subCategories);
    });
  };

  useEffect(() => {
    loadCategories();
    loadsingleSubCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createSubCategory({ name, parent: category }, user.token)
      .then((response) => {
        setLoading(false);
        setName("");
        console.log("API Response:", response);
        if (response && response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          console.error("Invalid response format:", response);
        }
        loadSubCategories();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data);
        }
      });
  };

  const handleRemove = async (slug) => {
    let answer = window.confirm(`Delete? ${slug}`);
    console.log(answer, slug);
    if (answer) {
      setLoading(true);
      removeSubCategory(slug, user.token)
        .then((response) => {
          setLoading(false);
          toast.error(`"${slug}" Sub category Deleted`);
          loadSubCategories();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error(err.response.data);
        });
    }
  };

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

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
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Please Select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
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

          <SearchForm keyword={keyword} setkeyword={setkeyword} />

          <div>
            {subCategories && subCategories.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sub Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subCategories.filter(Searched(keyword)).map((category) => (
                    <tr key={category._id}>
                      <td>{category.name}</td>
                      <td>
                        <Link to={`/admin/subcategory/${category.slug}`}>
                          <button className="btn btn-warning">Update</button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(category.slug)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No categories found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSubCategory;
