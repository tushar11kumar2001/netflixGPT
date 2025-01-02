import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Registration from "./pages/registration/Registration";
import RegistrationForm from "./pages/registration/RegistrationForm";
import { EmailContext } from "./utils/emailContext";
import { useEffect, useState } from "react";
import Browser from "./pages/browser/Browser";
import { useFirebaseContext } from "./utils/firebaseContext";
import { useDispatch } from "react-redux";
import { changeLanguage } from "./redux/configLangSlice";
import Footer from "./components/gpt/footer/Footer";
import BrowserProtectedWraper from "./helper/BrowserProtectedWraper";

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
          <Route path="/browser" element={
            <BrowserProtectedWraper>
            <Browser />
            </BrowserProtectedWraper>
            } />
        </Routes>
      </EmailContext.Provider>
      {current_location.pathname === "/" || current_location.pathname === "/in/" || current_location.pathname === "/browser" ? <Footer/> :""}
    </div>
  );
}

export default App;
