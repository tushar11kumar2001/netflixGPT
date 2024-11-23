import { useNavigate } from 'react-router-dom'
import { ROOT } from '../../../route';
import { useSelector } from 'react-redux';
import { language } from '../../utils/language';




const Body = () => {
  const navigate = useNavigate();
  const lang = useSelector(store => store.configLang.Language);
  return (
    <main>
      <div className="flex flex-col gap-5 justify-center items-center w-1/3 p-5   left-2/4 absolute top-2/4 translate-y-[-50%] translate-x-[-50%]">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
          alt="device"
          className="w-2/4 h-20"
        />
        <h1 className="  text-4xl font-semibold text-gray-800 text-center">
          {language[lang].registration_title}
        </h1>
        <p className="w-[70%] text-center text-lg font-normal text-slate-700">
          {language[lang].registration_paragraph}
        </p>
        <button
          className="w-3/4 bg-red-700 h-16 rounded text-white font-medium text-xl"
          onClick={() => navigate(ROOT.SIGNUPFORM)}
        >
          {language[lang].next}
        </button>
      </div>
    </main>
  )
}

export default Body
