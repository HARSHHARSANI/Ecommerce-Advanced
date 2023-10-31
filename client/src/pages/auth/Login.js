import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../../Firebase";
import { Button } from "antd";
import { MailOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createOrUpdateUser } from "../../functions/authFunction.js";

const Login = () => {
  const [email, setEmail] = useState("dreamoscp@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  const roleBaseRedirect = (response) => {
    try {
      if (response.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/history");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      // console.log(user);
      const idTokenResult = await user.getIdTokenResult();
      // console.log(idTokenResult);

      createOrUpdateUser(idTokenResult.token)
        .then((response) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: response.data.name,
              email: response.data.email,
              token: idTokenResult.token,
              role: response.data.role,
              id: response.data._id,
            },
          });
          roleBaseRedirect(response.data);
        })
        .catch();
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.token) navigate("/");
    //eslint-disable-next-line
  }, []);

  const handleGoogleLogin = async () => {
    try {
      auth.signInWithPopup(googleAuthProvider).then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        createOrUpdateUser(idTokenResult.token)
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: response.data.name,
                email: response.data.email,
                token: idTokenResult.token,
                role: response.data.role,
                id: response.data._id,
              },
            });
            roleBaseRedirect(response);
          })
          .catch();
      });
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const LoginForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            placeholder="Enter Your Email"
          />
          <br />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <br />
        </div>

        <Button
          type="primary"
          shape="round"
          icon={<MailOutlined />}
          size="large"
          onClick={handleSubmit}
          block
          className="mb-3"
          disabled={!email || password.length < 6}
        >
          Login With Email And Password
        </Button>
      </form>
    );
  };
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3"></div>
          {loading ? (
            <h4 className="text-secondary">Loading .....</h4>
          ) : (
            <h4>Login</h4>
          )}
          {LoginForm()}
          <>
            <Button
              type="primary"
              shape="round"
              icon={<GooglePlusOutlined />}
              size="large"
              onClick={handleGoogleLogin}
              block
              className="mb-3"
              disabled={!email || password.length < 6}
              style={{ background: "red", borderColor: "red" }}
            >
              Login With Google
            </Button>
          </>
          <>
            <Link
              to={"/forgot/password"}
              className="text-danger container text-end"
            >
              Forgot Password
            </Link>
          </>
        </div>
      </div>
    </>
  );
};

export default Login;
