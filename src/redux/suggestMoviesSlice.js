import { createSlice } from "@reduxjs/toolkit";

const suggestMoviesSlice = createSlice({
    name:"suggested movies",
    initialState:{
        moviesList: [],
        movieData:[],
        loading:false
    },
    reducers:{
        addMovies:(state,action)=>{
            state.moviesList = action.payload
        },
        addMoviesData:(state,action)=>{
            // if(state.movieData[state.movieData.length - 1]?.name !== action.payload?.name) 
                state.movieData.push(action.payload);
    
        },
        emptyMovieData:(state)=>{
            state.movieData = [];
        },
        updateLoading:(state)=>{
               state.loading = !state.loading
        }
    }
})

export const {addMovies,addMoviesData,emptyMovieData,updateLoading} = suggestMoviesSlice.actions;
export default suggestMoviesSlice.reducer