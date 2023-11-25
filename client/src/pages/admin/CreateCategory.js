import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../functions/categoryFunction";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CategoryForm from "../../components/forms/CategoryForm.js";
import SearchForm from "../../components/forms/SearchForm.js";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  ///searching / Filtering
  const [keyword, setkeyword] = useState("");

  const loadCategories = () => {
    getCategories().then((response) => {
      console.log(response);
      setCategories(response.data);
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory(name, user.token)
      .then((response) => {
        setLoading(false);
        setName("");
        console.log("API Response:", response);
        if (response && response.data && response.data.message) {
          toast.success(response.data.message);
          loadCategories(); // Reload the categories after creating a new one
        } else {
          console.error("Invalid response format:", response);
        }
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
      removeCategory(slug, user.token)
        .then((response) => {
          setLoading(false);
          toast.error(`"${slug}" category Deleted`);
          loadCategories();
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
          <h4>Create Category Page</h4>

          <CategoryForm
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
          />

          <SearchForm keyword={keyword} setkeyword={setkeyword} />

          <div>
            {categories &&
            categories.categories &&
            categories.categories.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.categories
                    .filter(Searched(keyword))
                    .map((category) => (
                      <tr key={category._id}>
                        <td>{category.name}</td>
                        <td>
                          <Link to={`/admin/category/${category.slug}`}>
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

export default CreateCategory;
