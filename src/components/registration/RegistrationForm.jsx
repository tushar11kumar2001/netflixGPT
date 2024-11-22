import { useRef, useState } from "react";
import { EmailContext } from "../../utils/emailContext";
import { useContext } from "react";
import formValidation from "../../utils/formvalidation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";
import { useFirebaseContext } from "../../utils/firebaseContext";
import { language } from "../../utils/language";


const RegistrationForm = () => {
  const firebaseContext = useFirebaseContext();
  const lang = useSelector(store => store.configLang.Language);
  const { email } = useContext(EmailContext);
  const [useremail, setUserEmail] = useState(email);
  const [isvalid, setValid] = useState(null);
  const [hide, setHide] = useState(false);
  const emailref = useRef(null);
  const [password,setPassword] = useState(null);
  const nameref = useRef(null);
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const [profileImg,setProfileImg] = useState(null);

  function handleValid() {
    const message = formValidation(
      emailref.current.value,
      password
    );
    setValid(message);
    if (message) return;

    //sign up logic
    firebaseContext.createNewUser(emailref.current.value,password,nameref.current.value,profileImg,setHide,setValid)
  }

  return (
    <div>
      {!hide && (
        <div className="flex flex-col w-1/3  mx-auto mt-8 py-5 px-8 gap-5">
          <h1 className="text-4xl font-semibold text-gray-800">
         {language[lang].registration_form_title}
          </h1>
          <p className="text-xl text-gray-700">
          {language[lang].registration_form_heading}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex flex-col gap-5"
          >
            <input
              ref={nameref}
              type="text"
              className="border border-black h-12 rounded px-3"
              placeholder={language[lang].enter_name}
            />
            <input
              ref={emailref}
              type="text"
              className="border border-black h-12 rounded px-3"
              placeholder={language[lang].enter_email}
              value={useremail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              onChange={(e)=>setPassword(e.target.value)}
              type="text"
              className="border border-black h-12 rounded px-3"
              placeholder={language[lang].enter_password}
            />
            <p className="text-red-600 font-medium">{isvalid}</p>
            {/* <label htmlFor="profileImg001">Add profile image</label>
            <input type="file" id="profileImg001" onChange={(e)=> setProfileImg(e.target.files[0])} /> */}

            <button
              className="h-16 bg-red-700 rounded text-white font-normal text-2xl"
              onClick={handleValid}
            >
             {language[lang].next}
            </button>
          </form>
        </div>
      )}

      {hide && (
        <div className="flex flex-col w-1/3  mx-auto mt-8 py-5 px-8 gap-10">
          <div>
            <h1 className="text-5xl font-semibold text-gray-800 mb-5">
              {language[lang].account_created}
            </h1>
            <p className="text-gray-800">
              {language[lang].use_email_to_access}
            </p>
          </div>
          <p className="font-semibold text-lg text-green-700">
            {userobj?.email}
          </p>
          <button
            className="h-16 bg-red-700 rounded text-white font-normal text-2xl"
            onClick={() => {
              navigate(ROOT.BROWSER);
            }}
          >
            {language[lang].continue}
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
