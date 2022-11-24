import baseReducer from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        base: baseReducer,
    },
});

export default store;
