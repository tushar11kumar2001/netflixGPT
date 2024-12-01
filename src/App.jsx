import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Registration from "./components/registration/Registration";
import RegistrationForm from "./components/registration/RegistrationForm";
import { EmailContext } from "./utils/emailContext";
import { useEffect, useState } from "react";
import Browser from "./components/browser/Browser";
import { useFirebaseContext } from "./utils/firebaseContext";
import { useDispatch } from "react-redux";
import { changeLanguage } from "./redux/configLangSlice";
import Footer from "./components/footer/Footer";

function App() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const current_location = useLocation();
  const firebaseContext = useFirebaseContext();

  useEffect(() => {
      firebaseContext.authChanged();
      if(localStorage.getItem("language"))dispatch(changeLanguage(localStorage.getItem("language")));
  }, []);
  
  return (
    <div className="">
      <EmailContext.Provider value={{ email: email, setEmail: setEmail }}>
        <Routes>
          <Route path="/" element={<Login />} />,
          <Route path="/in/" element={<SignUp />} />
          <Route path="/signup/registration" element={<Registration />} />,
          <Route path="/signup/regform" element={<RegistrationForm />} />,
          <Route path="/browser" element={<Browser />} />
        </Routes>
      </EmailContext.Provider>
      {current_location.pathname === "/" || current_location.pathname === "/in/" || current_location.pathname === "/browser" ? <Footer/> :""}
    </div>
  );
}

export default App;
