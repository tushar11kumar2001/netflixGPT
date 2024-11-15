import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../../utils/searchMovies'
import MovieCard from '../browser/MovieCard'
import { addMoviesData, emptyMovieData } from '../../redux/suggestMoviesSlice'

import { Loader } from '../../utils/constant'


const SuggestionMovies = () => {
  const dispatch = useDispatch();
  const suggestedMovies = useSelector(store => store.suggestedMovies.moviesList)
  const suggestedMoviesData = useSelector(store => store.suggestedMovies.movieData)
  const loading = useSelector(store => store.suggestedMovies.loading)
  if (!suggestedMovies) return;
  useEffect(()=>{
    suggestedMovies.length !== 0 && suggestedMovies.forEach((movie) => {
      searchMovies(movie).then((data) => dispatch(addMoviesData({ "name": data.original_title, "poster": data.poster_path })))
    })

    return ()=>{
      dispatch(emptyMovieData())
    }
  },[suggestedMovies])

  return (

 

    <div className='flex gap-10 justify-center mt-16'>

     {
     loading?
     <img src={Loader} className='w-32' alt="" />  :
      suggestedMoviesData.length ? 
      suggestedMoviesData.map((m)=> <MovieCard key={m.name} poster={m.poster} name={m.name}/>) :
      ""
      }
    </div>

  )
}

export default SuggestionMovies
