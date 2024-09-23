import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlist";
import accountSlice from  "./login"
import cartSlice from "./cart"

export const store = configureStore({
    reducer :{
        account : accountSlice ,
        wishlist: wishlistReducer,
        cart : cartSlice,
    }
});