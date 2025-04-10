import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import authSlice from "./authSlice"

const store = configureStore({
    reducer:{
        auth : authSlice,
        job : jobSlice
    }
})

export default store;