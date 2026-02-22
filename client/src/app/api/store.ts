import { configureStore } from "@reduxjs/toolkit";
import { api } from "./baseApi";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
});
