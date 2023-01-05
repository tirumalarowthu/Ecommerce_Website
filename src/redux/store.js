import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        productlist:productSlice
    }
})
export default store
