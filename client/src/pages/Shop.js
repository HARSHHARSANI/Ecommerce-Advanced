import React, { useEffect, useState } from "react";
import { getProductByCount } from "../functions/ProductFunction";
import ProductCard from "../components/Cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../functions/ProductFunction";
import _, { values } from "lodash";
import { getSubCategories } from "../functions/SubCategoryFunction";
import { Menu, Slider, Checkbox } from "antd";
import { DollarOutlined, DownSquareOutlined } from "@ant-design/icons";
import { getCategories } from "../functions/categoryFunction";
import Star from "../components/forms/Star";

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [priceok, setPriceok] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryIds, setSubCategoryIds] = useState([]);
  const [showBasedOnSelectedColor, setShowBasedOnSelectedColor] =
    useState(false);
  const [showBasedOnSelectedBrand, setShowBasedOnSelectedBrand] =
    useState(false);
  const [showBasedOnSelectedShipping, setShowBasedOnSelectedShipping] =
    useState(false);
  // const [star, setStar] = useState("");
  const [brands, setBrands] = useState([
    "Apple",
    "Microsoft",
    "Lenovo",
    "Asus",
    "Dell",
    "Hp",
    "Jio",
    "Samsung",
    "MSI",
  ]);
  const [shipping, setShipping] = useState(["Yes", "No"]);
  const [colors, setColors] = useState([
    "Black",
    "Brown",
    "White",
    "Silver",
    "Blue",
  ]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [shippingStatus, setShippingStatus] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [showProductsBasedOnText, setShowProductsBasedOnText] = useState(false);
  const [showProductsBasedOnCategoryIds, setShowProductsBasedOnCategoryIds] =
    useState(false);
  const [
    showProductsBasedOnSubCategoryIds,
    setShowProductsBasedOnSubCategoryIds,
  ] = useState(false);
  const [showproductsBasedOnprice, setShowproductsBasedOnprice] =
    useState(false);

  const dispatch = useDispatch();

  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  //1load products by default on page load
  const loadAllProducts = () => {
    setloading(true);
    getProductByCount(15).then((res) => {
      setProducts(res.data);
      setloading(false);
    });
  };

  useEffect(() => {
    setloading(true);
    loadAllProducts();
    //fetch Categories
    getCategories().then((res) => {
      setCategories(res.data.categories);
      getSubCategories().then((response) => {
        setSubCategories(response.data.subCategories);
      });
    });
    setloading(false);
  }, []);

  const fetchproducts = (arg) => {
    searchProducts(arg).then((response) => {
      setProducts(response.data);
    });
  };

  //2 load products based on user search inputs
  useEffect(() => {
    if (showProductsBasedOnText) {
      const delayed = setTimeout(() => {
        fetchproducts({ query: text });
      }, 700);

      return () => clearTimeout(delayed);
    } else {
      setShowProductsBasedOnText(true);
    }
  }, [text]);

  ///whenever we change the price slider the state of text in the redux state should be empty ""

  useEffect(() => {
    if (showproductsBasedOnprice) {
      fetchproducts({ price });
    } else {
      setShowproductsBasedOnprice(true);
    }
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

  const handleCheck = (e) => {
    setPrice([0, 0]);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    if (e.target.checked) {
      setCategoryIds((prev) => [...prev, e.target.value]);
    } else {
      setCategoryIds((prev) => prev.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (showProductsBasedOnCategoryIds) {
      fetchproducts({ categoryIds });
    } else {
      setShowProductsBasedOnCategoryIds(true);
    }
  }, [categoryIds]);

  ///4 load product based on category
  const showCategories = () =>
    categories?.map((category, _id) => (
      <div key={category._id}>
        <Checkbox
          className="pb-2 pl-4 pr-4 pt-3"
          value={category._id}
          name="category"
          onChange={handleCheck}
        >
          {category.name}
        </Checkbox>
        <br />
      </div>
    ));

  useEffect(() => {
    if (showProductsBasedOnSubCategoryIds) {
      fetchproducts({ subCategoryIds });
    } else {
      setShowProductsBasedOnSubCategoryIds(true);
    }
  }, [subCategoryIds]);

  /// load products based on subcategory
  const showSubCategory = () =>
    subCategories?.map((s) => {
      return (
        <div key={s._id}>
          <Checkbox
            className="pb-2 pl-4 pr-4 pt-3"
            value={s._id}
            name="subcategory"
            onChange={handleSubCheck}
          >
            {s.name}
          </Checkbox>
        </div>
      );
    });

  const handleSubCheck = (e) => {
    if (e.target.checked) {
      setSubCategoryIds((prev) => [...prev, e.target.value]);
    } else {
      setSubCategoryIds((prev) => prev.filter((id) => id !== e.target.value));
    }
  };

  ///product By Star rating
  // const handleStarClick = (num) => {
  //   console.log(num);
  // };
  // const showstars = () => (
  //   <div className="pb-4 pl-4 pr-4">
  //     <Star starClick={handleStarClick} numberOfstars={5} />
  //   </div>
  // );

  //show products based on brands

  const handleBrand = (e, brand) => {
    const checked = e.target.checked;

    if (checked) {
      setSelectedBrands((prevBrands) => [...prevBrands, brand]);
    } else {
      setSelectedBrands((prevBrands) =>
        prevBrands.filter((prevBrand) => prevBrand !== brand)
      );
    }
  };

  useEffect(() => {
    if (showBasedOnSelectedBrand) {
      fetchproducts({ selectedBrands });
    } else {
      setShowBasedOnSelectedBrand(true);
    }
  }, [selectedBrands]);

  const showBrands = () => {
    return brands?.map((brand) => (
      <div key={brand}>
        <Checkbox
          className="pb-2 pl-4 pr-4 pt-3"
          value={brand}
          name="brands"
          onChange={(e) => handleBrand(e, brand)}
        >
          {brand}
        </Checkbox>
      </div>
    ));
  };

  const handleShipping = (e) => {
    const shippingvalues = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setShippingStatus((prev) => [...prev, shippingvalues]);
    } else {
      setShippingStatus((prev) =>
        prev.filter((prevShipping) => prevShipping !== shippingvalues)
      );
    }
  };

  useEffect(() => {
    if (showBasedOnSelectedShipping) {
      fetchproducts({ shippingStatus });
    } else {
      setShowBasedOnSelectedShipping(true);
    }
  }, [shippingStatus]);

  const showShipping = (e) => {
    return (
      <>
        <div>
          <Checkbox
            className="pb-2 pl-4 pr-4 pt-3"
            name="Shipping"
            value="Yes"
            onChange={handleShipping}
          >
            Yes
          </Checkbox>
        </div>
        <div>
          <Checkbox
            className="pb-2 pl-4 pr-4 pt-3"
            name="Shipping"
            value="No"
            onChange={handleShipping}
          >
            No
          </Checkbox>
        </div>
      </>
    );
  };

  const handleColors = (e) => {
    const color = e.target.value;
    const selected = e.target.checked;
    if (selected) {
      setSelectedColor((prev) => [...prev, color]);
    } else {
      setSelectedColor((prevSelected) =>
        prevSelected.filter((prevColor) => prevColor !== color)
      );
    }
  };

  useEffect(() => {
    if (showBasedOnSelectedColor) {
      fetchproducts({ selectedColor });
    } else {
      setShowBasedOnSelectedColor(true);
    }
  }, [selectedColor]);

  const showColors = () => {
    return (
      <>
        {colors.map((color) => (
          <Checkbox
            className="pb-2 pl-4 pr-4 pt-3"
            name="color"
            value={color}
            onChange={handleColors}
          >
            {color}
          </Checkbox>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 pt-3 mx-2">
            <h3 className="mb-3 pb-3 ">Filter Menu</h3>
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
              <SubMenu
                key="2"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> Categories
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showCategories()}</div>
              </SubMenu>
              {/* <SubMenu
                key="3"
                title={
                  <span className="h6">
                    <StarOutlined /> Ratings
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showstars()}</div>
              </SubMenu> */}
              <SubMenu
                key="4"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> SubCategories
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showSubCategory()}</div>
              </SubMenu>
              <SubMenu
                key="5"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> Brands
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showBrands()}</div>
              </SubMenu>
              <SubMenu
                key="6"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> Colors
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showColors()}</div>
              </SubMenu>
              <SubMenu
                key="7"
                title={
                  <span className="h6">
                    <DownSquareOutlined /> Shipping
                  </span>
                }
              >
                <div style={{ marginTop: "-10px" }}>{showShipping()}</div>
              </SubMenu>
            </Menu>
          </div>{" "}
          <div className="col">
            {loading ? (
              <h4 className="text-danger">Loading....!</h4>
            ) : (
              <h4 className="text-danger pt-3 ">Products</h4>
            )}
            <div className="row pb-3 px-5 ">
              {products?.map((product, id) => (
                <div
                  className="col-md-5 pb-4 mx-3 px-2 pt-2"
                  style={{ marginLeft: "20px" }}
                >
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
