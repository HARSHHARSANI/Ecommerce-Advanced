import React, { useState, useEffect } from "react";
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            label: "Option 1",
            key: "setting:1",
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

const Header = () => {
  const [current, setCurrent] = useState("home");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { user } = useSelector((state) => ({ ...state }));

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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={user ? items2WithDynamicUsername : items1}
      className="ml-auto"
    />
  );
};

export default Header;
