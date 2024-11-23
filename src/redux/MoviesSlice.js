import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../utils/getMoviesData";

export const MoviesListThunks = createAsyncThunk("nowPlayingMoviesListThunk", async()=>{
    const now_playing = await getMovies("now_playing");
    const popular = await getMovies("popular");
    const top_rated = await getMovies("top_rated");
    const up_comping = await getMovies("upcoming");
    
    return {now_playing: now_playing, popular: popular, top_rated: top_rated, up_coming: up_comping};
})
const MoviesSlice = createSlice({
    name:"MoviesList",
    initialState:{
        loading : true,
        now_playing_movies: null,
        popular_movies: null,
        top_rated_movies: null,
        up_coming_movies: null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(MoviesListThunks.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(MoviesListThunks.fulfilled, (state,action)=>{
            state.loading = false;
            state.now_playing_movies = action.payload.now_playing;
            state.popular_movies = action.payload.popular;
            state.top_rated_movies = action.payload.top_rated;
            state.up_coming_movies = action.payload.up_coming;
        })
    }
})

export default MoviesSlice.reducer;