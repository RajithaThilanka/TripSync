import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../slices/navSlice";
import { apiService } from "./apiService";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
