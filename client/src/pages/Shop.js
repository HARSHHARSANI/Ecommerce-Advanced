import React, { useEffect, useState } from "react";
import { getProductByCount } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../functions/ProductFunction";
import _ from "lodash";
import { Menu, Slider, Checkbox } from "antd";
import { DollarOutlined, DownSquareOutlined } from "@ant-design/icons";
import { getCategories } from "../functions/categoryFunction";
const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [priceOk, setPriceOk] = useState(false);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  ///load products by default on page load
  useEffect(() => {
    getProductByCount(10).then((res) => {
      setInitialProducts(res.data);
      setloading(false);
    });
  }, []);

  const fetchProducts = (args) => {
    searchProducts(args).then((res) => {
      setInitialProducts(res.data);
    });
  };
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  //load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
    }, 1000);
  }, [text]);

  ///whenever we change the price slider the state of text in the redux state should be empty ""
  ///load products based on price range
  // useEffect(() => {
  //   dispatch({
  //     type: "SEARCH_QUERY",
  //     payload: { text: "" },
  //   });
  //   const delayed = setTimeout(() => {
  //     fetchProducts({ price });
  //   }, 1000);
  // }, [price]);

  ///load products based on category

  // useEffect(() => {
  //   dispatch({
  //     type: "SEARCH_QUERY",
  //     payload: { text: "" },
  //   });
  //   const delayed = setTimeout(() => {
  //     fetchProducts({ category });
  //   }, 1000);
  // }, [category]);

  //load product based on category

  const showCategories = categories.map((category) => (
    <div key={category._id}>
      <Checkbox className="pt-2 pb-2 pr-4" value={category._id} name="category">
        {category.name}
      </Checkbox>
    </div>
  ));
  return (
    <>
      {JSON.stringify(categories)}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3 pt-2 ">
            <h4>Filter Menu</h4>
            <hr />
            <Menu defaultOpenKeys={["1", "2"]} mode="inline">
              <SubMenu
                key="1"
                title={
                  <span className="h6">
                    <DollarOutlined /> Price
                  </span>
                }
              >
                <div>
                  <Slider
                    className="ml-4 mr-4"
                    range
                    value={price}
                    onChange={(value) => {
                      setPrice(value);
                    }}
                    max="4999"
                  />
                </div>
              </SubMenu>
              <SubMenu
                key="2"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> Categories
                  </span>
                }
              >
                <div className="h4">{showCategories}</div>
              </SubMenu>
            </Menu>
          </div>
          <div className="col-md-9 flex-column pt-2  ">
            {loading ? (
              <h4 className="text-danger "> Loading..!! </h4>
            ) : (
              <h4 className="text-danger">Products</h4>
            )}

            {initialProducts.length < 1 && <p>No Products Found</p>}
            <div className="row pb-3">
              {initialProducts.map((product, _id) => (
                <div key={_id} className="col-md-4 mt-5">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
