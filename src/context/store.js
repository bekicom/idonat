import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./service/api.service";

 const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // Boshqa reducerlar
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store