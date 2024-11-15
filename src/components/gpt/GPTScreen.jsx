import React, { useEffect } from 'react'
import GPTSearchBar from './GPTSearchBar'
import SuggestionMovies from './SuggestionMovies'
import { backgroundLogoURL } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { emptyMovieData } from '../../redux/suggestMoviesSlice'

const GPTScreen = ({ lang }) => {
  const dispatch = useDispatch();


  // useEffect(()=> {
  //   dispatch(emptyMovieData())
  // },[])
  return (
    <div className='pt-[10%] bg-black bg-opacity-70  h-screen'>
      <div className="absolute top-0 -z-10 ">
        <img className="h-screen w-screen" src={backgroundLogoURL} alt="background image" />
      </div>
      <GPTSearchBar lang={lang} />
      <SuggestionMovies />
    </div>
  )
}

export default GPTScreen;
