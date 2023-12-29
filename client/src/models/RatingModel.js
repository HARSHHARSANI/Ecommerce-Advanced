import React, { Children, useState } from "react";
import StarRatings from "react-star-ratings";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const RatingModel = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      navigate("/login", {
        state: location.pathname,
      });
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" /> <br />
        {user ? "Leave Rating" : "Login To Leave Rating"}
      </div>
      <Modal
        title="Leave Your Rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success("Thanks For your Review ,  It will Appreat Sooon!!");
        }}
        onCancel={() => {
          setModalVisible(false);
        }}
      >
        {" "}
        {children}
      </Modal>
    </>
  );
};

export default RatingModel;
