import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";

export default configureStore({
  reducer: { shopSlice },
});