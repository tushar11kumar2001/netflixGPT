import { API_option } from "./constant";

export const getMovies = async (category) => {
  
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?page=1`,
      API_option
    );
    const response = await data.json();
    return response.results;
  } 
  catch (e) {
    console.log("error to fetch  movies ", e);
  }
};

export const logo = async (id) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      API_option
    );
    const response = await data.json();
    return response.logos[0].file_path;
  } catch (e) {
    console.log("error to fetch logo", e);
  }
};


export const trailer = async (id)=>{
  try{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, API_option)
    const response = await data.json();
    const filterData = response.results.filter((movie)=>movie.type === "Trailer");
    // console.log(filterData);
     return filterData.length?filterData[0].key:response.results[0].key;
    
  } catch(e){
    console.log("error to fetch trailer ",e);
  }


}