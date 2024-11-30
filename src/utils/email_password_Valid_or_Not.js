import { language } from "./language";
import { ROOT } from "../../route";

export const email_password_Valid_or_Not = (lang, email, password) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!validEmail) return language[lang].email_validation_message?language[lang].email_validation_message:"";
  if (password !== undefined) {
    const validPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!validPassword) return language[lang].password_validation_message?language[lang].password_validation_message:""
  }
};



const handle_form_validation = (
  {
    email,
    password=undefined,
    name=undefined,
    profileImg=undefined,
    setHide=undefined,
    setValidation_message,
    location,
    lang,
    navigate=undefined,
    firebaseContext=undefined,
    
  }
) => {
  let message = email_password_Valid_or_Not(lang, email, password);
  setValidation_message(message);
  if (message) return;

  if(location === "login") firebaseContext.login(email, password, setValidation_message);
  else if(location === "signup") navigate(ROOT.REGISTRATION);
  else if(location === "registrationform") firebaseContext.createNewUser(email,password,name,profileImg,setHide,setValidation_message)
}

export default handle_form_validation;

