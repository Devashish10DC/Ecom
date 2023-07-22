import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Auth/Login";
import Home from "./Components/Pages/Home";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import "./App.css";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import CartProvider from "./Components/Cart/CartContext";
import Contact from "./Components/Pages/Contact";
import SignUp from "./Components/Auth/SignUp";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Route>
    )
  );
  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </>
  );
};

export default App;
