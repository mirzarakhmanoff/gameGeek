import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/redux/slices/cart-slice";
import { Link } from "react-router-dom";
import { message } from "antd"; // Импортируем message из Ant Design

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage(); // Создаем message API
  const [isAdded, setIsAdded] = useState(false); // Состояние для отслеживания добавления в корзину

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Product added to cart successfully!",
    });
  };

  const handleAddToCart = () => {
    dispatch(add({ cart: product }));
    success();
    setIsAdded(true); // Устанавливаем состояние в true после добавления
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[300px] cursor-pointer">
      {contextHolder}
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-48 object-contain rounded-lg mb-4"
      />
      <Link to={`/products/${product.id}`}>
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      </Link>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <div className="flex space-x-2 mb-4">
        {product.colors?.map((color, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full p-1"
            style={{ backgroundColor: color }}
          >
            {color}
          </span>
        ))}
      </div>
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ${
          isAdded ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
