import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../../utils/language';

const Footer = () => {
    const lang = useSelector(store => store.configLang.Language);
  return (
    <div className='relative '>
    <img className='absolute' src="../../../public/curve.png" alt="curve" />
    <div className='absolute top-[75px] bg-black  w-full text-gray-400 py-20 px-24'>
      <h2 className='mb-10 text-lg'>{language[lang].question?language[lang].question:""+language[lang].call?language[lang].call:""} 000-800-919-1694</h2>

      {/* <div className='flex justify-between'>
      <div>
        <ul>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].FAQ}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].investor_relations}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].privacy}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].speed_test}</a></li>
        </ul>
      </div>
      <div>
      <ul>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].help_center}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].jobs}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].cookie_preferences}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].legal_notices}</a></li>
        </ul>
      </div>
      <div>
      <ul>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].account}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].ways_to_watch}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].corporate_information}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].only_on_netflix}</a></li>
        </ul>
      </div>
      <div>
      <ul>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].media_centre}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].terms_of_use}</a></li>
            <li className='leading-10 underline hover:text-blue-800'><a href="">{language[lang].contact_us}</a></li>
          
        </ul>
      </div>
      </div> */}
    </div>
    </div>
  )
}

export default Footer
