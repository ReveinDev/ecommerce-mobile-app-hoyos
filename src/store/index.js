import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopSlice from "../features/shop/shopSlice";
import cartSlice from "../features/shop/cartSlice";
import { shopService } from "../services/shopService";

const store = configureStore({
  reducer: {
    shopSlice,
    cartSlice,
    [shopService.reducerPath]: shopService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopService.middleware),
});

setupListeners(store.dispatch);

export default store;
