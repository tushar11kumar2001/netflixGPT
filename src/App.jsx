import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Registration from "./components/registration/Registration";
import RegistrationForm from "./components/registration/RegistrationForm";
import { EmailContext } from "./utils/emailContext";
import { useEffect, useState } from "react";
import Browser from "./components/browser/Browser";
import { useFirebaseContext } from "./utils/firebaseContext";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "./redux/configLangSlice";
import Footer from "./components/footer/Footer";

function App() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const current_location = useLocation();
  const firebaseContext = useFirebaseContext();
  const [lang,setLang] = useState("en");

  useEffect(() => {
      firebaseContext.authChanged();
      setLang(localStorage.getItem("language"))
  }, []);
  
  return (
    <div className="">
      <EmailContext.Provider value={{ email: email, setEmail: setEmail }}>
        <Routes>
          <Route path="/" element={<Login lang={lang} setLang={setLang}/>} />,
          <Route path="/in/" element={<SignUp lang={lang} setLang={setLang}/>} />
          <Route path="/signup/registration" element={<Registration lang={lang} setLang={setLang}/>} />,
          <Route path="/signup/regform" element={<RegistrationForm lang={lang} />} />,
          <Route path="/browser" element={<Browser lang={lang} setLang={setLang}/>} />
        </Routes>
      </EmailContext.Provider>
      {current_location.pathname === "/" || current_location.pathname === "/in/" || current_location.pathname === "/browser" ? <Footer lang={lang}/> :""}
    </div>
  );
}

export default App;
