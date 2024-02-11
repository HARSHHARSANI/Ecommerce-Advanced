// import SideDrawer from "./components/drawer/SideDrawer";
// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";
// import RegisterComplete from "./pages/auth/RegisterComplete";
// import { auth } from "./Firebase";
// import { useDispatch } from "react-redux";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import { currentUser } from "./functions/authFunction";
// import History from "./pages/user/History";
// import UserRoute from "./components/UserRoute";
// import Password from "./pages/user/Password";
// import Wishlist from "./pages/user/Wishlist";
// import AdminRoute from "./components/AdminRoute";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import CreateCategory from "./pages/admin/CreateCategory";
// import UpdateCategory from "./pages/admin/UpdateCategory";
// import CreateSubCategory from "./pages/admin/CreateSubCategory";
// import UpdateSubCategory from "./pages/admin/UpdateSubCategory";
// import CreateProduct from "./pages/admin/product/CreateProduct";
// import AllProducts from "./pages/admin/product/AllProducts";
// import UpdatedProductPage from "./pages/admin/product/UpdateProductPage";
// import SingleProductPage from "./pages/SingleProductPage";
// import ProductBasedOnSubcategory from "./pages/ProductBasedOnSubcategory";
// import ProductsBasedOnCategory from "./pages/ProductsBasedOnCategory";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";


import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/authFunction";

const SideDrawer = lazy(() => import("./components/drawer/SideDrawer"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const History = lazy(() => import("./pages/user/History"));
const UserRoute = lazy(() => import("./components/UserRoute"));
const Password = lazy(() => import("./pages/user/Password"));
const Wishlist = lazy(() => import("./pages/user/Wishlist"));
const AdminRoute = lazy(() => import("./components/AdminRoute"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const CreateCategory = lazy(() => import("./pages/admin/CreateCategory"));
const UpdateCategory = lazy(() => import("./pages/admin/UpdateCategory"));
const CreateSubCategory = lazy(() => import("./pages/admin/CreateSubCategory"));
const UpdateSubCategory = lazy(() => import("./pages/admin/UpdateSubCategory"));
const CreateProduct = lazy(() => import("./pages/admin/product/CreateProduct"));
const AllProducts = lazy(() => import("./pages/admin/product/AllProducts"));
const UpdatedProductPage = lazy(() =>
  import("./pages/admin/product/UpdateProductPage")
);
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const ProductBasedOnSubcategory = lazy(() =>
  import("./pages/ProductBasedOnSubcategory")
);
const ProductsBasedOnCategory = lazy(() =>
  import("./pages/ProductsBasedOnCategory")
);
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

const App = () => {
  const dispatch = useDispatch();

  ///to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: response.data.name,
                email: response.data.email,
                token: idTokenResult.token,
                role: response.data.role,
                id: response.data._id,
              },
            });
          })
          .catch((error) => console.log(error));
      }
    });
    ///cleanup
    return () => unsubscribe();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <SideDrawer />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:slug" element={<SingleProductPage />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/category/:slug" element={<ProductsBasedOnCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/subcategory/:slug"
          element={<ProductBasedOnSubcategory />}
        />
        <Route path="/" element={<UserRoute />}>
          <Route path="/user/history" element={<History />} />
          <Route path="/user/password" element={<Password />} />
          <Route path="/user/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<AdminDashboard />} />
          <Route path="/admin/category" element={<CreateCategory />} />
          <Route path="/admin/product" element={<CreateProduct />} />
          <Route path="/admin/products" element={<AllProducts />} />
          <Route
            path="/admin/products/:slug"
            element={<UpdatedProductPage />}
          />
          <Route path="/admin/subcategory" element={<CreateSubCategory />} />
          <Route
            path="/admin/subcategory/:slug"
            element={<UpdateSubCategory />}
          />

          <Route path="/admin/product" element={<CreateProduct />} />
          <Route path="/admin/coupons" element={<AdminDashboard />} />
          <Route path="/admin/password" element={<AdminDashboard />} />
          <Route path="/admin/category/:slug" element={<UpdateCategory />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
