
import { useNavigate } from 'react-router-dom';
import { useState,useRef } from 'react';
import formValidation from '../../utils/formvalidation';
import { ROOT } from '../../../route';
import { useContext } from 'react';
import { EmailContext } from '../../utils/emailContext';
import { useSelector } from 'react-redux';
import { language } from '../../utils/language';

const Main = () => {
  const lang = useSelector(store => store.configLang.Language)
  const {setEmail} = useContext(EmailContext);
    const navigate = useNavigate();
    const email = useRef(null);
    const [validEmail, setValidEmail] = useState(null);
  
    function isvalid() {
      let message = formValidation(email.current.value);
      if(message == "invalid email") message = language[lang].email_validation_message;
      setValidEmail(message);
      if (message) return;
      navigate(ROOT.REGISTRATION)
    }
  return (
    <div className=''>
    
      <div className="text-white flex flex-col items-center "> 
        <h1 className="text-center text-5xl font-bold">
          {language[lang].sign_up_main_heading}
        </h1>
        <p className="text-center py-7 text-2xl font-bold tracking-wider">
        {language[lang].sign_up_second_heading}
        </p>
        <p className="text-center text-xl font-medium mb-7">
        {language[lang].sign_up_third_heading}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=""
        >
          <input
            ref={email}
            type="text"
            className="px-2 py-4 mr-3 w-96 bg-black bg-opacity-50 border-white rounded-md "
            placeholder={language[lang].enter_email}
            required
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={isvalid}
            className="py-3 bg-red-600 px-5 text-2xl rounded-md font-medium"
          >
            {language[lang].get_started}
          </button>
          <p className="text-rose-200 font-medium">{validEmail}</p>
        </form>
      </div>
    </div>
  )
}

export default Main
