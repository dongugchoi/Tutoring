import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState : {},
    reducers:{
        value:0
    },
    reudcers : {
        increment : (state) =>{
            state.value += 1;
        }
    }
})