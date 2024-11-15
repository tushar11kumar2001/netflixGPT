import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
import popularMoviesReducer from "./popularMoviesSlice"
import topRatedMoviesReducer from "./topRatedMoviesSlice"
import gptReducer from "./gptSlice"
import configLangReducer from "./configLangSlice"
import suggestMoviesReducers from "./suggestMoviesSlice"

 const appStore = configureStore({
    reducer:{
      user:userReducer,
      nowPlayingMoviesList: nowPlayingMoviesReducer,
      popularMoviesList: popularMoviesReducer,
      topRatedMoviesList: topRatedMoviesReducer,
      gptScreen: gptReducer,
      configLang:configLangReducer,
      suggestedMovies: suggestMoviesReducers,
     
    }
 })

 export default appStore;