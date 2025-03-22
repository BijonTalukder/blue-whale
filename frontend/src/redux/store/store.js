import { configureStore } from "@reduxjs/toolkit";
import baseApi from "../Api/baseApi";

const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
     
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  })
  
  export default store;
  export const useAppDispatch = () => store.dispatch;
  export const useAppSelector = (selector) => selector(store.getState());