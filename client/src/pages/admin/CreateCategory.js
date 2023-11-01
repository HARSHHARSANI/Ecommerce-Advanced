import React, { useState, useEffect } from "react";
import AdminNav from "../../components/AdminNav.js";
import toast from "react-toastify";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  getSingleCategories,
  removeCategory,
  updateCategory,
} from "../../functions/categoryFunction";

const CreateCategory = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col-md-10 text-center">
            <h4>Create Category Page</h4>
            <form></form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
