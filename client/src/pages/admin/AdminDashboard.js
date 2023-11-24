import React from "react";
import AdminNav from "../../components/AdminNav.js";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col-md-10 text-center">
            <h4>Admin Dashboard</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;