import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MoviesReducer from "./MoviesSlice"
import gptReducer from "./gptSlice"
import configLangReducer from "./configLangSlice"
import suggestMoviesReducers from "./suggestMoviesSlice"

 const appStore = configureStore({
    reducer:{
      user:userReducer,
      MoviesList: MoviesReducer,
      gptScreen: gptReducer,
      configLang:configLangReducer,
      suggestedMovies: suggestMoviesReducers,
     
    }
 })

 export default appStore;