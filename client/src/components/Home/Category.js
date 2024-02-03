import React, { useEffect, useState } from "react";
import { getCategories } from "../../functions/categoryFunction";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(categories)} */}

      {categories?.map((Category, id) => (
        <div key={id}>
          <Button onClick={() => navigate(`/category/${Category.slug}`)}>
            {Category.name}
          </Button>
        </div>
      ))}
    </>
  );
};
