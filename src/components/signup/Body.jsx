
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Handle_form_validation from '../../utils/email_password_Valid_or_Not';
import { useContext } from 'react';
import { EmailContext } from '../../utils/emailContext';
import { useSelector } from 'react-redux';
import { language } from '../../utils/language';

const Body = () => {
  const [validation_message, setValidation_message] = useState(null);
  const email = useRef(null);
  const {setEmail} = useContext(EmailContext); //destructuring of set function of email from email context..
  
  const navigate = useNavigate();

  const lang = useSelector(store => store.configLang.Language);  


  return (
    <div className=''>

      <div className="text-white flex flex-col items-center ">
        <h1 className="text-center text-5xl font-bold">
          {language[lang].sign_up_main_heading?language[lang].sign_up_main_heading:""}
        </h1>
        <p className="text-center py-7 text-2xl font-bold tracking-wider">
          {language[lang].sign_up_second_heading?language[lang].sign_up_second_heading:""}
        </p>
        <p className="text-center text-xl font-medium mb-7">
          {language[lang].sign_up_third_heading?language[lang].sign_up_third_heading:""}
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=""
        >
          <input
            ref={email}
            type="text"
            className="px-2 py-4 mr-3 w-96 bg-black bg-opacity-50 border-white rounded-md "
            placeholder={language[lang].enter_email?language[lang].enter_email:""}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            onClick={()=>Handle_form_validation(
              {
              email:email.current.value,
              setValidation_message,
              location:"signup",
              lang,
              navigate
            }
          )}
            className="py-3 bg-red-600 px-5 text-2xl rounded-md font-medium"
          >
            {language[lang].get_started?language[lang].get_started:""}
          </button>
          {
            validation_message &&
            <p className="text-red-600 font-medium"><i className="fa-solid fa-circle-exclamation"></i> {validation_message}</p>
          }
        </form>
      </div>
    </div>
  )
}

export default Body
