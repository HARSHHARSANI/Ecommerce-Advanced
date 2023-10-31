import React, { useState } from "react";
import UserNav from "../../components/userNav";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(password);
    try {
      setLoading(true);
      await auth.currentUser.updatePassword(password);

      setLoading(false);
      toast.success("Password Updated");
      console.log("Password Updated");
      setPassword("");
    } catch (error) {
      console.log("Password Update Error", error);
      setLoading(false);
      toast.error(error);
    }
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label>Your Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mt-2"
          placeholder="Enter Your New Password"
          disabled={loading}
          value={password}
        />
        <button
          className="btn btn-warning mt-3"
          disabled={loading || password.length < 6}
        >
          Submit
        </button>
      </div>
    </form>
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserNav />
          </div>
          <div className="col-md-9">
            {loading ? (
              <h3 className="text-danger">Loading</h3>
            ) : (
              <h3>Password Update</h3>
            )}
            {passwordUpdateForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
