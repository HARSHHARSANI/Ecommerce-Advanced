import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/authFunction";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

const SideDrawer = lazy(() => import("./components/drawer/SideDrawer"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
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
const Category = lazy(() => import("./components/Home/Category"));
const Subcategory = lazy(() => import("./components/Home/Subcategory"));
const ProductBasedOnSubcategory = lazy(() =>
  import("./pages/ProductBasedOnSubcategory")
);
const ProductsBasedOnCategory = lazy(() =>
  import("./pages/ProductsBasedOnCategory")
);
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const CreateCoupon = lazy(() => import("./components/Home/CreateCoupon.js"));
const Success = lazy(() => import("./pages/Success.js"));

const App = () => {
  const dispatch = useDispatch();

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
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
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
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Checkout />} />
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

            <Route path="/admin/coupons" element={<CreateCoupon />} />
            <Route path="/admin/password" element={<AdminDashboard />} />
            <Route path="/admin/category/:slug" element={<UpdateCategory />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
