import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

let details = localStorage.getItem("accountDetails");

if(details){
    details = JSON.parse(details);
    initialState = details;
}



const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addAccount : (state, action) => {
            let {payload} = action;
            localStorage.setItem("accountDetails",JSON.stringify(payload));
            return payload;
        } 
    }
});

export const { addAccount } = accountSlice.actions;

export default accountSlice.reducer;