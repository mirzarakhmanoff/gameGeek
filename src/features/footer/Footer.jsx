import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">GameGeek</h3>
            <p className="text-sm mt-2">Start your game with the best</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Gift Card
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Order Pickup
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Account Signup
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-lg font-semibold">Help</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    ShopCart Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Track Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Security & Fraud
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm hover:underline">
                    News & Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline">
                    Press Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Help Center
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-green-500 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-sm hover:text-green-500 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-sm hover:text-green-500 transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <p className="text-sm text-center mt-6">
          &copy; All rights reserved by GameGeek | 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
