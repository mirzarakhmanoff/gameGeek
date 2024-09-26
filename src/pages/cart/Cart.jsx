import ShoppingCart from "@/components/cart/ShoppingCart";
import Footer from "@/features/footer/Footer";
import Header from "@/features/header/Header";
import React from "react";

const Cart = () => {
  return (
    <div>
      <Header />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default Cart;
