import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/shop/cartSlice";
import authSlice from "../features/shop/authSlice";
import { shopService } from "../services/shopService";
import { authService } from "../services/authService";

const store = configureStore({
  reducer: {
    shopSlice,
    cartSlice,
    authSlice,
    [shopService.reducerPath]: shopService.reducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopService.middleware).concat(authService.middleware),
});

setupListeners(store.dispatch);

export default store;
