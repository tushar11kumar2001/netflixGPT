import React, { useRef } from 'react'
import { language } from '../../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import { run } from '../../utils/geminiAIConfig'
import { addMovies, emptyMovieData, updateLoading } from '../../redux/suggestMoviesSlice'

const GPTSearchBar = ({lang}) => {
  const dispatch = useDispatch();
  const searchRef = useRef();

  const handlegeminiAI = (query) => {
    console.log("handle gemini AI");
    dispatch(updateLoading());
    run(query).then((response) => {
      const arr = response.split(",");
      dispatch(addMovies(arr));
      dispatch(updateLoading());
      

    })
  }
  
  return (
    <div className='flex justify-center bg-black bg-opacity-75 w-1/2  p-3 mx-auto rounded-md'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-full  grid grid-cols-12 gap-5'
      >
        <input
          ref={searchRef}
          type="text"
          className='col-span-9 h-14 rounded-md px-5'
          placeholder={language[lang]?.gptPlaceHolder} />
        <button
          onClick={() => handlegeminiAI(searchRef.current.value)}
          className='col-span-3 bg-red-600 rounded-md text-white text-xl font-semibold'>{language[lang]?.search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
