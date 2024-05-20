import React from 'react'
import { language } from '../../utils/language'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const lang = useSelector(store=>store.configLang.Language)
  return (
    <div className='flex justify-center bg-black bg-opacity-75 w-1/2  p-3 mx-auto rounded-md'>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className='w-full  grid grid-cols-12 gap-5'
      >
        <input 
        type="text" 
        className='col-span-9 h-14 rounded-md px-5'
        placeholder={language[lang].gptPlaceHolder}/>
        <button 
        className='col-span-3 bg-red-600 rounded-md text-white text-xl font-semibold'>{language[lang].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
