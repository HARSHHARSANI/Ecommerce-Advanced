import React, { useEffect, useState } from "react";
import { getProductByCount } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";
import { useSelector } from "react-redux";
import { searchProducts } from "../functions/ProductFunction";
import _ from "lodash";
import { Menu, Slider } from "antd";
import { DollarOutlined } from "@ant-design/icons";
const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState([0, 0]);

  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  ///load products by default on page load
  useEffect(() => {
    getProductByCount(10).then((res) => {
      setInitialProducts(res.data);
      setloading(false);
    });
  }, []);

  ///load products on user search input

  useEffect(() => {
    const delayedSearch = _.debounce(() => {
      searchProducts(text).then((response) => {
        setInitialProducts(response.data);
      });
    }, 1000);

    delayedSearch();

    return () => {
      delayedSearch.cancel();
    };
  }, [text]);

  ///load products based on price range

  return (
    <>
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
                    tipFormatter={(v) => `$${v}`}
                    range
                    value={price}
                    onChange={(value) => {
                      setPrice(value);
                    }}
                    max="4999"
                  />
                </div>
              </SubMenu>
            </Menu>
          </div>
          <div className="col-md-9 flex-column pt-2 ">
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
