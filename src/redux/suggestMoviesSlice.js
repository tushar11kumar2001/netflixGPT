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
                state.movieData.push(action.payload);
    
        },
        emptyMovieData:(state)=>{
            state.moviesList.length = 0;
            state.movieData.length = 0;
        },
        updateLoading:(state)=>{
               state.loading = !state.loading
        }
    }
})

export const {addMovies,addMoviesData,emptyMovieData,updateLoading} = suggestMoviesSlice.actions;
export default suggestMoviesSlice.reducer