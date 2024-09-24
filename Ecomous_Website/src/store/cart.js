import { createSlice } from "@reduxjs/toolkit";
import { compareListWithProduct } from "../components/helpers/ProductDisplayCard";
import { toast } from "../hooks/use-toast"

let initialState = [];

let listItems = localStorage.getItem("cartItems");

if (listItems) {
    listItems = JSON.parse(listItems);
    initialState = listItems;
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            if (compareListWithProduct(state, payload)) {
                toast({ description: 'This item is already in your cart.' });
                return state;
            }
            state.push(payload);
            localStorage.setItem('cartItems', JSON.stringify(state));
            toast({ description: "Item added to Cart" })
        },
        removeFromCart: (state, action) => {
            const { payload } = action;

            const newWishList = state.filter((current) => {
                if (current.id === payload.id) {
                    return false;
                }
                return true;
            })
            localStorage.setItem('cartItems', JSON.stringify(newWishList));
            return newWishList;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;