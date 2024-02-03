import React, { useEffect, useState } from "react";
import { getSubCategories } from "../../functions/SubCategoryFunction";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const Subcategory = () => {
  const [subcategory, setSubcategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getSubCategories().then((res) => {
      setSubcategory(res.data.subCategories);
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(subcategory)} */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {subcategory.length ? (
          subcategory.map((singleSubcategory) => (
            <div
              key={singleSubcategory._id}
              style={{ margin: "3px", padding: "5px" }}
            >
              <Button
                onClick={() =>
                  navigate(`subcategory/${singleSubcategory.slug}`)
                }
              >
                {singleSubcategory.name}
              </Button>
            </div>
          ))
        ) : (
          <div>No Subcategory Found</div>
        )}
      </div>
    </>
  );
};

export default Subcategory;
