import React from "react";
import discoverCard from "@/assets/discoverCard.png";

function DiscoverCard() {
  return (
    <div className="bg-gray-800 bg-opacity-80 w-[300px] text-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
      <img
        src={discoverCard}
        alt="Gaming setup"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">ALWAYS IN THE GAME</h2>
      <p className="text-base mb-4">
        Stay ahead of the latest and greatest gaming tech, featuring new
        releases, exclusive deals, and exciting pre-orders.
      </p>
      <button className="text-green-500 border-b border-transparent hover:border-green-500 transition duration-200">
        See More
      </button>
    </div>
  );
}

export default DiscoverCard;
