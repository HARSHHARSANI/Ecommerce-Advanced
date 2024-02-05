import React, { useEffect, useState } from "react";
import { getCategories } from "../../functions/categoryFunction";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setCategories(res.data.categories);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(categories)} */}
      {categories.length ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {categories?.map((Category, id) => (
            <div key={id} style={{ margin: "3px", padding: "5px" }}>
              <Button onClick={() => navigate(`/category/${Category.slug}`)}>
                {Category.name}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        "No Category Found"
      )}
    </>
  );
};
