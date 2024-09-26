import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import Products from "./products/Products";
import Cart from "./cart/Cart";
import SinglePage from "./singlePage/SinglePage";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
