import React from "react";
import { Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? <Outlet /> : <Spinner />;
};

export default UserRoute;
