import { createSlice } from "@reduxjs/toolkit";


//props로 전역관리는 너무 복잡하다.

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