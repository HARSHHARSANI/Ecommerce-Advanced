import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createOrUpdateUser } from "../../functions/authFunction";

const RegisterComplete = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    console.log(window.location.href);
    console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("password must be atleast 6 character Long");
      return;
    }

    if (!email) {
      toast.error("Email  is Required");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log("Result", result);
      if (result.user.emailVerified) {
        ///remove the emaiil from the local storage
        window.localStorage.removeItem("emailForRegistration");

        ///get user ID token(JWT)
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        ///redux Store
        console.log("user", user, "idTokenResult", idTokenResult);

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
          })
          .catch();
        ///redirectf
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const registerCompleteForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-control" value={email} disabled />

        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          placeholder="Enter Your password"
        />
        <br />
        <button type="submit" className="btn btn-secondary btn-lg btn-block">
          Complete Registeration
        </button>
      </form>
    );
  };
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3"></div>
          <h4>Register Complete</h4>
          {registerCompleteForm()}
        </div>
      </div>
    </>
  );
};

export default RegisterComplete;
