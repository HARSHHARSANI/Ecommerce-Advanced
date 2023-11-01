import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  getSingleCategories,
  removeCategory,
  updateCategory,
} from "../../functions/categoryFunction";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [loading, setloading] = useState(false);
  const [categories, setCategories] = useState(null);
  const { user } = useSelector((state) => ({ ...state }));

  const LoadCategory = () => {
    getCategories().then((c) => setCategories(c.data));
  };

  useEffect(() => {
    LoadCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    createCategory(name, user.token)
      .then((response) => {
        setloading(false);
        setName("");
        console.log("API Response:", response);
        if (response && response.data && response.data.message) {
          toast.success(`${response.data.message}`);
        } else {
          // Handle the case where the response is not as expected
          console.error("Invalid response format:", response);
        }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        if (err.response.state === 400) toast.error(err.response.data);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col">
            <h4>Create Category Page</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  required
                />
                <br />
                <button className="btn btn-primary mt-3" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {categories && (
              <div className="alert alert-secondary">
                {categories.categories.map((category) => (
                  <div key={category._id}>
                    <div className="category-item">
                      <p>{category.name}</p>
                      <Link to={`/admin/category/${category.slug}`}>
                        <button className="btn btn-primary">
                          <EditOutlined />
                        </button>
                      </Link>
                      <button className="btn btn-danger">
                        <DeleteOutlined />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
