import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { UseSelector, useSelector } from "react-redux";
import { Avatar, Badge } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const FileUpload = ({ values, setvalues, setLoading }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    //resize
    //   send back to server to upload to cloudinary
    //   set url to images[] in the parent component
    let files = e.target.files;
    let allUploadedFiles = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "jpeg",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/cloudinary/uploadimages`,
                {
                  image: uri,
                },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((response) => {
                console.log("IMAGE UPLOAD RESPONSE DATA", response);
                setLoading(false);
                allUploadedFiles.push(response.data);
                setvalues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY UPLOAD ERROR", err);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    console.log("Remove Image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/cloudinary/removeimages`,
        {
          public_id,
        },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);

        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setvalues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        {values.images &&
          values.images.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              style={{ cursor: "pointer" }}
              onClick={() => handleImageRemove(image.public_id)}
            >
              <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              />
            </Badge>
          ))}
      </div>

      <div className="row">
        <label className="btn btn-primary">
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
