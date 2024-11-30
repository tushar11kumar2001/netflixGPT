import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";
import { useEffect } from "react";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import { MoviesListThunks } from "../../redux/MoviesSlice";
import GPTScreen from "../gpt/GPTScreen";

const Browser = ({lang,setLang}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userobj = useSelector((store) => store.user);
  const gptScreen = useSelector(store => store.gptScreen.toggleGPTScreen)
  
  useEffect(() => { if (!userobj?.uid) navigate(ROOT.LOGIN) }, [userobj]);
  useEffect(() => { dispatch(MoviesListThunks()) }, [])




  return (
    <div className="">
      <div className="fixed z-20 w-full">
        <Header userobj={userobj} setLang={setLang}/>
      </div>

      {
        gptScreen ?
          <GPTScreen lang={lang} /> :
          <>
            <PrimaryContainer lang={lang} />
            <SecondaryContainer lang={lang} />
          </>
      }

    </div>
  );
};

export default Browser;
