import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, remove } from "@/redux/slices/cart-slice"; // Adjust the import based on your file structure
import { FaTimes } from "react-icons/fa"; // Import the icon

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.value); // Ensure correct state path
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;

    if (newQuantity < 1) return;

    dispatch(update({ id: item.id, cart: { ...item, quantity: newQuantity } }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(remove(itemId)); // Dispatch the remove action
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
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2">Shopping Cart</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-center">Quantity</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">Remove</th>
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
              <tr key={item.id} className="hover:bg-gray-100 transition">
                <td className="py-4 px-4 flex items-center">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 rounded-md shadow"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">
                      {item.color_options.join(", ")}
                    </p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded"
                      onClick={() => handleQuantityChange(item, -1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity || 0}</span>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded"
                      onClick={() => handleQuantityChange(item, +1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-right text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}{" "}
                  {/* Total price for this item */}
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-6 p-4 border-t border-gray-300">
        <h2 className="text-lg font-semibold">Cart Totals</h2>
        <ul className="mt-2">
          <li className="flex justify-between py-2">
            <span>Shipping (3-5 Business Days)</span>
            <span>Free</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Tax (estimated for the United States (US))</span>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li className="flex justify-between font-bold py-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li className="flex justify-between font-bold py-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
