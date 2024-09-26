import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, remove } from "@/redux/slices/cart-slice";
import { FaTimes } from "react-icons/fa";
import { message } from "antd";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const successRemove = () => {
    messageApi.open({
      type: "success",
      content: "Item removed from cart successfully!",
    });
  };

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;

    if (newQuantity < 1) return;

    dispatch(update({ id: item.id, cart: { ...item, quantity: newQuantity } }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(remove({ id: itemId }));
    successRemove();
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const shippingCost = 0;
  const tax = 0;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost + tax;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      {contextHolder}
      <div className="mb-4 flex justify-between items-center">
        <a href="/" className="text-gray-600 hover:text-gray-800">
          &larr; Back to Shopping
        </a>
      </div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-6 border-b pb-4 mb-6">
        <div className="col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-center">Quantity</th>
                <th className="py-2 px-4 text-right">Price</th>
                <th className="py-2 px-4 text-right">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-center">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 flex items-center">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-16 h-16 rounded-md"
                      />
                      <div className="ml-4">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          {item.color_options.join(", ")}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-200"
                          onClick={() => handleQuantityChange(item, -1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-200"
                          onClick={() => handleQuantityChange(item, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTimes className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="col-span-1 p-6 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <ul className="space-y-2 mb-4">
            <li className="flex justify-between">
              <span>Shipping (3-5 Business Days)</span>
              <span>Free</span>
            </li>
            <li className="flex justify-between">
              <span>Tax (estimated for US)</span>
              <span>${tax.toFixed(2)}</span>
            </li>
            <li className="flex justify-between font-bold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </li>
            <li className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
          <button className="bg-green-500 text-white py-2 px-4 rounded w-full font-semibold hover:bg-green-600 mb-4">
            Proceed to Checkout
          </button>
          <Link to={"/products"}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full font-semibold hover:bg-blue-600">
              Back to Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
