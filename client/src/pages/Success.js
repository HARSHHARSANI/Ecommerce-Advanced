import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after a brief delay
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000); // Change the delay time as needed (in milliseconds)

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h2>Payment Successful</h2>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default Success;
