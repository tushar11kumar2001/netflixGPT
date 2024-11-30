import Header from "../login/Header"
import Body from "./Body";

const Registration = ({lang,setLang}) => {

  return (
    <div className="h-screen">
     <Header lang={lang} setLang={setLang}/>
     <Body lang={lang}/>
    </div>
  );
};

export default Registration;
