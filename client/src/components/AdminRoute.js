import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { CurrentAdmin } from "../functions/authFunction";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      CurrentAdmin(user.token)
        .then((res) => {
          console.log("Current Admin RES", res);
          setOk(true);
        })
        .catch((err) => console.log("Admin Route Error", err));
    }
  }, [user]);

  return ok ? <Outlet /> : <Spinner />;
};

export default AdminRoute;
