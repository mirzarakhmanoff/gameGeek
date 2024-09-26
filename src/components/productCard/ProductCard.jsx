import React from "react";
import { useDispatch } from "react-redux";
import { add } from "@/redux/slices/cart-slice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ cart: product }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[300px] cursor-pointer">
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
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
