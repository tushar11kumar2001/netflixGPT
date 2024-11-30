import Header from "./Header";
import handle_form_validation from "../../utils/email_password_Valid_or_Not.js";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route.js";
import { useFirebaseContext } from "../../utils/firebaseContext.jsx";
import { useSelector } from "react-redux";
import { backgroundLogoURL } from "../../utils/constant.js";
import { language } from "../../utils/language.js";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [validation_message, setValidation_message] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const firebaseContext = useFirebaseContext();

  const userObj = useSelector((store) => store.user);
  const lang = useSelector(store => store.configLang.Language)

  const handleShowPassword = () => { setShowPassword(!showPassword) }

  useEffect(() => { if (userObj?.uid) navigate(ROOT.BROWSER) }, [userObj]) //to check user logged in or not 


  return (

    <div className="relative h-screen "
      style={{ backgroundImage: `url(${backgroundLogoURL})` }}
    >
      <div className="bg-black bg-opacity-65 w-full h-full absolute "></div>
      <div className="absolute w-full"><Header/></div>

      <form
        onSubmit={(e) => { e.preventDefault() }}
        className=
        "absolute  left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-black w-3/12 p-12 text-white bg-opacity-80 rounded-lg "
      >
        <h1 className="font-medium mb-6 text-3xl">{language[lang].sign_in?language[lang].sign_in:""}</h1>
        <input
          ref={email}
          className="w-full p-4 my-4 bg-gray-600 rounded-lg outline-none hover:border-2 border-red-800"
          type="text"
          placeholder={language[lang].enter_email?language[lang].enter_email:""}
        />
        <div className="flex justify-between items-center pr-3  w-full  my-4 bg-gray-600 rounded-lg hover:border-2 border-red-800">
          <input
            ref={password}
            className="p-4 w-11/12  bg-gray-600 rounded-lg outline-none "
            type={showPassword ? "text" : "password"}
            placeholder={language[lang].enter_password?language[lang].enter_password:""}
          />
          {
          showPassword ? 
          <i className="fa-solid fa-eye-slash cursor-pointer" onClick={handleShowPassword}></i> : 
          <i className="fa-solid fa-eye cursor-pointer" onClick={handleShowPassword}></i>
          }
        </div>
        {
        validation_message && 
        <p className="text-red-600 font-medium"><i className="fa-solid fa-circle-exclamation"></i> {validation_message}</p>
        }

        <button
          className="w-full p-4 my-6 bg-red-600 rounded-lg "
          onClick={()=>handle_form_validation(
            {
              email:email.current.value,
              setValidation_message,
              location:"login",
              lang,
              firebaseContext,
              password:password.current.value
          }
        )}
        >
          {language[lang].sign_in?language[lang].sign_in:""}
        </button>

        <p className="py-4">
          New to Netflix?{" "}
          <span
            className="cursor-pointer font-medium hover:text-blue-700 hover:underline"
            onClick={() => {
              navigate(ROOT.SIGNUP);
            }}
          >
            {language[lang].sign_up?language[lang].sign_up:""}
          </span>
        </p>
      </form>
      
    </div>

  );
};

export default Login;
