import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import SuggestionMovies from './SuggestionMovies'
import { backgroundLogoURL } from '../../utils/constant'

const GPTScreen = () => {
  return (
    <div className='pt-[10%] bg-black bg-opacity-70  h-screen'>
        {/* <div className="absolute top-0 -z-10 ">
            <img className="h-screen w-screen"  src={backgroundLogoURL} alt="background image" />
        </div> */}
      <GPTSearchBar/>
      <SuggestionMovies/>
    </div>
  )
}

export default GPTScreen
