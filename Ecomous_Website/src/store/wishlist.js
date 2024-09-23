import { createSlice } from "@reduxjs/toolkit";


let initialState = [];

let listItems = localStorage.getItem("wishlist");

if (listItems) {
    listItems = JSON.parse(listItems);
    initialState = listItems;
}



const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const { payload } = action;
            state.push(payload);
            localStorage.setItem('wishlist', JSON.stringify(state));
        },
        removeFromWishlist: (state, action) => {
            const { payload } = action;

            const newWishList = state.filter((current) => {
                if (current.id === payload.id) {
                    return false;
                }
                return true;
            })
            localStorage.setItem('wishlist', JSON.stringify(newWishList));
            return newWishList;
        }
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;