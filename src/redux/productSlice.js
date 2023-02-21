import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products: [],
    status: "idle",
    error: ""
}
export const fetchproducts = createAsyncThunk("product", async () => {
    try {
        const responce = await axios.get("https://fakestoreapi.com/products")
        return responce.data
    }
    catch (err) {
        console.log(err)
    }
})
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.pending, (state, action) => {
            state.status = "loading"
        }).addCase(fetchproducts.fulfilled, (state, action) => {
            state.status = "success"
            state.products = action.payload
        }).addCase(fetchproducts.rejected, (state, action) => {
            state.status = "failed"
            state.err = action.payload.message
        })
    }
})
export default productSlice.reducer

