import { createSlice } from "@reduxjs/toolkit";

const configLangSlice = createSlice({
    name: "lang config",
    initialState: {
        Language: "en"
    },
    reducers:{
       changeLanguage:(state,action)=>{
            state.Language = action.payload
       }
    } 
})

export const {changeLanguage} = configLangSlice.actions;
export default configLangSlice.reducer;