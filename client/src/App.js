import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import RegisterComplete from "./pages/auth/RegisterComplete";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { currentUser } from "./functions/authFunction";
import History from "./pages/user/History";
import UserRoute from "./components/UserRoute";
import Spinner from "./components/Spinner";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import categoryFunction from "./functions/categoryFunction";
import CreateCategory from "./pages/admin/CreateCategory";
import UpdateCategory from "./pages/admin/UpdateCategory";
import CreateSubCategory from "./pages/admin/CreateSubCategory";
import UpdateSubCategory from "./pages/admin/UpdateSubCategory";
import CreateProduct from "./pages/admin/product/CreateProduct";

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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
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
