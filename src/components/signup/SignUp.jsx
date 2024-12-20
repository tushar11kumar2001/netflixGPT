import { backgroundLogoURL } from "../../utils/constant";
import Header from "../login/Header";
import Body from "./Body";

const SignUp = () => {
  return (
    <div className=' h-screen relative'
      style={{ backgroundImage: `url(${backgroundLogoURL})` }}>

      <div className="bg-black bg-opacity-65 w-full h-full absolute "></div>
      <div className="absolute w-full"><Header/></div>
      
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <Body />
      </div>
    </div>
  );
};

export default SignUp;
