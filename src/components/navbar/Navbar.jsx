import React from "react";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-white ">
      <nav className="container mx-auto flex justify-around  items-center py-[40px]">
        {/* Logo */}
        <div className="logo w-[200px]">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link
                to={"/products"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/brands"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                to={"/whats-new"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                What’s new
              </Link>
            </li>
            <li>
              <Link
                to={"/sales"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                Sales
              </Link>
            </li>
            <li>
              <Link
                to={"/help"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:text-[#14FF00] transition duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <FaSearch className="text-xl hover:text-[#14FF00] cursor-pointer transition duration-200" />
          <FaUser className="text-xl hover:text-[#14FF00] cursor-pointer transition duration-200" />
          <div className="relative">
            <FaShoppingCart className="text-xl hover:text-[#14FF00] cursor-pointer transition duration-200" />
            <span className="absolute top-[-8px] right-[-10px] bg-red-600 text-white text-xs font-bold rounded-full px-1">
              3
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
