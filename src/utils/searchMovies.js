import { API_option } from "./constant";

export const searchMovies = async (movie)=>{
    try{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false`, API_option)
        const response = await data.json();
        return response.results[0]
    }catch(e){
        console.log("error in movies search",e);
    }

}