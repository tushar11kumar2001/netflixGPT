import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        toggleGPTScreen: false,
    },
    reducers:{
       toggle:(state)=>{
         state.toggleGPTScreen = !state.toggleGPTScreen;
       }
    }
})

export const {toggle} = gptSlice.actions;
export default gptSlice.reducer;