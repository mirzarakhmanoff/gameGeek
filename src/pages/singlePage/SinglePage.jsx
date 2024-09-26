import Footer from "@/features/footer/Footer";
import Header from "@/features/header/Header";
import SinglePageProduct from "@/features/singlePageProduct/SinglePageProduct";
import React from "react";

const SinglePage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <SinglePageProduct />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
