import React, { useEffect, useState } from "react";
import UserNav from "../../components/userNav";
import { getAllOrders } from "../../functions/orderFunctions";
import { useSelector } from "react-redux";
const History = () => {
  const [userOrders, setUserOrders] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getAllOrders(user.token).then((response) => {
      console.log(response.data);
      setUserOrders(response.data);
    });
  }, []);

  return (
    <>
      {JSON.stringify(userOrders)}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserNav />
          </div>
          <div className="col-md-9">User History Page</div>
        </div>
      </div>
    </>
  );
};

export default History;
