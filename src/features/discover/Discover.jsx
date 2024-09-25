import DiscoverCard from "@/components/discovercard/DiscoverCard";
import React from "react";

const Discover = () => {
  return (
    <div className="bg-[#0D2612] py-[30px]">
      <div className="mx-auto container flex items-center justify-center flex-col">
        <h3 className="text-white text-3xl font-semibold mb-6">
          Discover news and innovations
        </h3>
        <div className="flex gap-5 p-[40px] justify-center items-center">
          <DiscoverCard />
          <DiscoverCard />
          <DiscoverCard />
        </div>
      </div>
    </div>
  );
};

export default Discover;
