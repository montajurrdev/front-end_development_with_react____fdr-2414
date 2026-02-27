import { configureStore } from "@reduxjs/toolkit";
import  addToCart  from "../features/cart/addToCartSlice";

export default configureStore({
    reducer: {
        cart: addToCart
    }
})