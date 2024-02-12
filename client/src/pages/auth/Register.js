import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.token) navigate("/");
    //eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(process.env.REACT_APP_REDIRECTING_URL);

    const config = {
      url:
        process.env.REACT_APP_REDIRECTING_URL ||
        "http://13.234.231.67/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email sent to ${email} . Click the link to complete your Registration`
    );

    ///saving email in local Storage

    window.localStorage.setItem("emailForRegistration", email);

    ///clear State
    setEmail("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          placeholder="Enter Your Email"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  };
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3"></div>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </>
  );
};

export default Register;
