import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    productList : [],
    selectedItem : null,
}

createSlice({
    name : 'hello',
    initialState,
    reducers : {
        getAllproducts(state, action){
            return {...state, productList : action.payload.data}
        }
    }
})