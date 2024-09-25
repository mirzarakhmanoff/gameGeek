import Discover from "@/features/discover/Discover";
import Footer from "@/features/footer/Footer";
import Header from "@/features/header/Header";
import Hero from "@/features/hero/Hero";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Discover />
      <Footer />
    </main>
  );
};

export default Home;
