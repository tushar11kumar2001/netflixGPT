import Header from "./Header";
import formValidation from "../../utils/formvalidation.js";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route.js";
import { useFirebaseContext } from "../../utils/firebaseContext.jsx";
import { useSelector } from "react-redux";
import { backgroundLogoURL } from "../../utils/constant.js";
import { language } from "../../utils/language.js";

const Login = () => {
  const firebaseContext = useFirebaseContext();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [valid, setValid] = useState(null);
  const [showPassword,setShowPassword] = useState(false);
  const userObj = useSelector((store) => store.user);
  const lang = useSelector(store => store.configLang.Language)
  useEffect(()=>{ if(userObj?.uid) navigate(ROOT.BROWSER) },[userObj])

  const handleShowPassword = ()=>{setShowPassword(!showPassword)}

  const handlevalid = () => {
    let message = formValidation(email.current.value, password.current.value);
    if(message == "invalid email") message = language[lang].email_validation_message;
    else message = language[lang].password_validation_message
    setValid(message);
    if (message) return;
    firebaseContext.login(email.current.value,password.current.value,setValid);
    
  };
  return (

        <div className="relative h-screen "
          style={{backgroundImage:`url(${backgroundLogoURL})`}}
        >
          <div className="bg-black bg-opacity-65 w-full h-full absolute "></div>

          <div className="absolute w-full">
          <Header /> 
          </div>

          <form
            onSubmit={(e) => {e.preventDefault()}}
            className="absolute  left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-black w-3/12 p-12 text-white bg-opacity-80 rounded-lg "
          >
            <h1 className="font-medium mb-6 text-3xl">{language[lang].sign_in}</h1>
            <input
              ref={email}
              className="w-full p-4 my-4 bg-gray-600 rounded-lg outline-none hover:border-2 border-red-800"
              type="text"
              placeholder={language[lang].enter_email}
            />
            <div className="flex justify-between items-center pr-3  w-full  my-4 bg-gray-600 rounded-lg hover:border-2 border-red-800">
            <input
              ref={password}
              className="p-4 w-11/12  bg-gray-600 rounded-lg outline-none "
              type={showPassword?"text":"password"}
              placeholder={language[lang].password}
            />
            {showPassword?<i className="fa-solid fa-eye-slash cursor-pointer" onClick={handleShowPassword}></i>: <i className="fa-solid fa-eye cursor-pointer" onClick={handleShowPassword}></i>}
           
            </div>
            <p className="text-red-600 font-medium">{valid}</p>
            <button
              className="w-full p-4 my-6 bg-red-600 rounded-lg "
              onClick={handlevalid}
            >
              {language[lang].sign_in}
            </button>

            <p className="py-4">
              New to Netflix?{" "}
              <span
                className="cursor-pointer font-medium"
                onClick={() => {
                  navigate(ROOT.SIGNUP);
                }}
              >
                {language[lang].sign_up}
              </span>
            </p>
          </form>
        </div>

  );
};

export default Login;
