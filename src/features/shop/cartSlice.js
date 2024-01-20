import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "userLogged",
    updateAt: Date.now().toLocaleString(),
    total: 0,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const gameInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!gameInCart) {
        state.cartItems.push(action.payload);
        const total = state.cartItems.reduce(
          (acc, item) => (acc += item.quantity * item.precio),
          0
        );
        state.total = total;
        state = {
          ...state,
          total,
          updateAt: Date.now().toLocaleString(),
        };
      } else {
        const updateItem = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = updateItem.reduce(
          (acc, item) => (acc += item.quantity * item.precio),
          0
        );
        state.total = total;
        state = {
          ...state,
          cartItems: updateItem,
          total,
          updateAt: Date.now().toLocaleString(),
        };
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
