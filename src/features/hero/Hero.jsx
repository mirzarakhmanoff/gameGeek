import React from "react";
import heroImg from "@/assets/hero.png";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }} // Correct way to set background image
    >
      <div className="absolute inset-0 bg-black pl-24 bg-opacity-50 flex flex-col justify-center items-start text-white text-center p-4">
        <p className="text-sm text-start">
          / Start / Categories / <br /> Headphones and audio for gaming
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 text-start">
          Headphones AND AUDIO <br /> FOR GAMING
        </h2>
      </div>
    </div>
  );
};

export default Hero;
