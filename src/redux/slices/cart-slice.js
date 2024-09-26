import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: [],
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
    },

    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    update: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.cart.quantity;
      }
    },
  },
});

export const { add, remove, update } = cart.actions;
export default cart.reducer;
