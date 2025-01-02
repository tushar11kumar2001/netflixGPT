import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'

const MovieCard = ({ poster}) => {
  return (
    <div className='w-52 text-wrap '>
      <div className='w-full '>
        <img src={IMG_CDN_URL + poster} alt="poster" className='rounded-md w-56  h-[300px] ' />
      </div>
    </div>

  )
}

export default MovieCard
