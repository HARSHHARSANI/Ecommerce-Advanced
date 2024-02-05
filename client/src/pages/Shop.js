import React, { useEffect, useState } from "react";
import { getProductByCount } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../functions/ProductFunction";
import _, { values } from "lodash";
import { Menu, Slider, Checkbox } from "antd";
import { DollarOutlined, DownSquareOutlined } from "@ant-design/icons";
import { getCategories } from "../functions/categoryFunction";
const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [priceok, setPriceok] = useState(false);
  const [categoryIds, setCategoryIds] = useState([]);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    loadAllProducts();
  }, []);

  //1load products by default on page load
  const loadAllProducts = () => {
    getProductByCount(10).then((res) => {
      setProducts(res.data);
      getCategories().then((res) => {
        setCategories(res.data.categories);
      });
      setloading(false);
    });
  };

  //2 load products based on user search inputs
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchproducts({ query: text });
    }, 700);

    return () => clearTimeout(delayed);
  }, [text]);

  const fetchproducts = (arg) => {
    searchProducts(arg).then((response) => {
      setProducts(response.data);
    });
  };

  ///whenever we change the price slider the state of text in the redux state should be empty ""

  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchproducts({ price });
    }, 700);

    return () => clearTimeout(delayed);
  }, [priceok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice(value);

    setTimeout(() => {
      setPriceok(!priceok);
    }, 700);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 pt-3">
            <h3 clas>Filter Menu</h3>
            <hr />
            <Menu mode="inline" defaultOpenKeys={["1", "2"]}>
              <SubMenu
                key="1"
                title={
                  <span className="h6">
                    <DollarOutlined /> price
                  </span>
                }
              >
                <div>
                  <Slider
                    range
                    defaultValue={[20, 50]}
                    className="mr-4 m-lg-4"
                    max="4999"
                    value={price}
                    onChange={handleSlider}
                  />
                </div>
              </SubMenu>
              <SubMenu key="2">
                <div>
                  <Slider
                    range
                    defaultValue={[20, 50]}
                    className="mr-4 m-lg-4"
                    max="4999"
                    value={price}
                    onChange={(value) => setPrice(value)}
                  />
                </div>
              </SubMenu>
            </Menu>
          </div>
          <div className="col-md-9 pt-3">
            {loading ? (
              <h4 className="text-danger">Loading....!</h4>
            ) : (
              <h4 className="text-danger">Products</h4>
            )}
            <div className="row pb-3">
              {products?.map((product, id) => (
                <div key={id} className="col-md-5 pb-4 pt-2">
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
