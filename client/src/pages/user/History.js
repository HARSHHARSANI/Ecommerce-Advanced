import React from "react";
import UserNav from "../../components/userNav";
const History = () => {
  return (
    <>
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
