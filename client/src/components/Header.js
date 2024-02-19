import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Badge, Menu } from "antd";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "./forms/Search";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { user, cart } = useSelector((state) => ({ ...state }));

  const userRole = user && user.token;

  const items2 = [
    {
      label: (
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      ),
      key: "home",
      icon: <HomeOutlined />,
      to: "/",
    },
    {
      label: (
        <Link to="/shop" style={{ textDecoration: "none" }}>
          Shop
        </Link>
      ),
      key: "shop",
      icon: <ShoppingOutlined />,
      to: "/shop",
    },

    {
      label: (
        <Badge count={cart.length} offset={[9, 0]}>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Cart
          </Link>
        </Badge>
      ),
      key: "cart",
      icon: <ShoppingOutlined />,
      to: "/cart",
    },

    {
      label: <Search />,
      style: { marginLeft: "auto", marginTop: "auto", marginBottom: "auto" },
    },

    {
      label: "Username",
      key: "SubMenu",
      icon: <SettingOutlined />,
      style: { marginLeft: "auto" },
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Dashboard",
              key: "setting:1",
              to:
                user && user.token
                  ? user.role === "admin"
                    ? "/admin/dashboard"
                    : "/user/history"
                  : "/",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
            {
              label: "Logout",
              key: "setting:logout",
              icon: <LogoutOutlined />,
            },
          ],
        },
      ],
    },
  ];

  const items1 = [
    {
      label: (
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      ),
      key: "home",
      icon: <HomeOutlined />,
      to: "/",
    },

    {
      label: (
        <Link to="/shop" style={{ textDecoration: "none" }}>
          Shop
        </Link>
      ),
      key: "shop",
      icon: <ShoppingOutlined />,
      to: "/shop",
    },

    {
      label: (
        <Badge count={cart.length}>
          {" "}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Cart
          </Link>
        </Badge>
      ),
      key: "cart",
      icon: <ShoppingOutlined />,
      to: "/cart",
    },

    {
      label: <Search />,
      style: { marginLeft: "auto" },
    },

    {
      label: (
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      ),
      key: "login",
      icon: <UserOutlined />,
      style: { marginLeft: "auto" },
    },

    {
      label: (
        <Link to="/register" style={{ textDecoration: "none" }}>
          Register
        </Link>
      ),
      key: "register",
      icon: <UsergroupAddOutlined />,
    },
  ];

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        navigate("login");
      });
  };

  const onClick = (e) => {
    setCurrent(e.key);

    if (e.key === "setting:logout") {
      handleLogout();
    } else if (e.key === "setting:1") {
      // Check the user's role and navigate accordingly
      if (user && user.token) {
        if (user.role === "admin") {  
          navigate("/admin/dashboard");
        } else {
          navigate("/user/history");
        }
      }
    }
  };

  const renderUsername = user ? (
    user.email ? (
      <Link to="/username" style={{ textDecoration: "none" }}>
        {user.email.split("@")[0]}
      </Link>
    ) : (
      "Username"
    )
  ) : (
    <Link to="/login" style={{ textDecoration: "none" }}>
      Login
    </Link>
  );

  const items2WithDynamicUsername = items2.map((item) => {
    if (item.key === "SubMenu") {
      item.label = renderUsername;
    }
    return item;
  });

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={user ? items2WithDynamicUsername : items1}
        className="ml-auto"
      />
    </>
  );
};

export default Header;
