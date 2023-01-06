import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        productlist:productSlice,
        cart:cartSlice
    }
})
export default store
