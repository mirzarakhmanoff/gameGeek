import Navbar from "@/components/navbar/Navbar";
import Subheader from "@/components/subheader/Subheader";
import Footer from "@/features/footer/Footer";
import Hero from "@/features/hero/Hero";
import ProductsCard from "@/features/productCards/ProductsCard";
import React from "react";

const Products = () => {
  return (
    <div>
      <Subheader />
      <Navbar />
      <Hero />
      <ProductsCard />
      <Footer />
    </div>
  );
};

export default Products;
