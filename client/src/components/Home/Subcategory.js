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
      {Object.keys(subcategory).map((key) => {
        const singleSubcategory = subcategory[key];
        return (
          <div key={subcategory._id}>
            <Button
              onClick={() => navigate(`subcategory/${singleSubcategory.slug}`)}
            >
              {singleSubcategory.name}
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default Subcategory;
