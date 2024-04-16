import {createSlice}  from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId:"661e748ea8bd7738b53b75f0"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode = state.mode==='light'?"dark":'light';
        }
    }
})

export const {setMode} = globalSlice.actions;

export default globalSlice.reducer