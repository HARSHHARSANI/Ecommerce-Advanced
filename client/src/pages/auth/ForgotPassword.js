import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../Firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) navigate("/");
    //eslint-disable-next-line
  }, [user]);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
        handleCodeInApp: true,
      };
      const response = await auth.sendPasswordResetEmail(email, config);
      if (response?.error) {
        // console.log(response.error);
      }
      setEmail("");
      setLoading(false);
      toast.success("Password reset link has been sent To your email", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="container col-md-6 offset-md-3 p-5">
        {loading ? (
          <h4 className="text-danger">Loading</h4>
        ) : (
          <h4>Form To get User Email</h4>
        )}
      </div>

      <form onSubmit={handleForgetPassword}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type Your Email"
          autoFocus
        />
        <br />
        <button className="btn btn-warning" disabled={!email} block>
          Submit
        </button>
      </form>
    </>
  );
};

export default ForgotPassword;
