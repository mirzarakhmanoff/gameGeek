import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: getInitialCart(),
  },
  reducers: {
    add: (state, action) => {
      const foundItem = state.value.find(
        (item) => item.id === action.payload.cart.id
      );

      if (foundItem) {
        const newQuantity = foundItem.quantity + action.payload.cart.quantity;
        if (newQuantity > 0) {
          foundItem.quantity = newQuantity;
        }
      } else {
        const quantityToAdd =
          action.payload.cart.quantity > 0 ? action.payload.cart.quantity : 1;

        state.value.push({
          ...action.payload.cart,
          quantity: quantityToAdd,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    update: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.cart.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { add, remove, update } = cart.actions;
export default cart.reducer;
