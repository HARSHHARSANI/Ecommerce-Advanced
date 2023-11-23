import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  updateCategory,
  getSingleCategories,
} from "../../functions/categoryFunction";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateCategory = ({ match, history }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  let { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = () => {
    getSingleCategories(slug)
      .then((c) => {
        setName(c.data.categoryExist.name);
      })
      .catch((error) => {
        console.error("Error loading category:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateCategory(slug, { name }, user.token)
      .then((response) => {
        setLoading(false);
        setName("");
        console.log("API Response:", response);
        if (response && response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          console.error("Invalid response format:", response);
        }
        navigate("/admin/category");
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
          <h4>Update Category Page</h4>
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
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
