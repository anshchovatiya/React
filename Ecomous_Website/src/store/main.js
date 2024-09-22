import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlist";
import accountSlice from  "./login"

export const store = configureStore({
    reducer :{
        account : accountSlice ,
        wishlist: wishlistReducer,
    }
});