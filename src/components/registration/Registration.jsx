import Header from "../login/Header"
import Body from "./Body";

const Registration = ({lang}) => {

  return (
    <div className="h-screen">
     <Header lang={lang}/>
     <Body lang={lang}/>
    </div>
  );
};

export default Registration;
