import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'

const MovieCard = ({ poster, name }) => {
  return (
    <div className='w-56 text-wrap '>
      <div className='w-56 '>
        <img src={IMG_CDN_URL + poster} alt="poster" className='rounded-md w-56  h-[200px] ' />
      </div>
      <p className='w-full  font-semibold  text-white text-2xl'>{name? name:""}</p>
    </div>

  )
}

export default MovieCard
