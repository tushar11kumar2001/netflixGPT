import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";

import { useEffect } from "react";
import { nowPlayingMoviesListThunks } from "../../redux/nowPlayingMoviesSlice";
import Header from "./Header";

import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import { popularMoviesListThunks } from "../../redux/popularMoviesSlice";
import { topRatedMoviesListThunk } from "../../redux/topRatedMoviesSlice";
import GPTScreen from "../gpt/GPTScreen";

const Browser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
  const lang = useSelector(store=>store.configLang.Language)


  // console.log("userobj", userobj)
  const gptScreen = useSelector(store => store.gptScreen.toggleGPTScreen)
  useEffect(() => { if (!userobj?.uid) navigate(ROOT.LOGIN) }, [userobj]);
  useEffect(() => {
    dispatch(nowPlayingMoviesListThunks());
    dispatch(popularMoviesListThunks());
    dispatch(topRatedMoviesListThunk());
  }, [])




  return (
    <div className="">
      <div className="fixed z-10 w-full"> 
      <Header userobj={userobj} lang={lang}/>
      </div>
  
      {
        gptScreen ?
          <GPTScreen lang={lang}/> :
          <>
            <PrimaryContainer lang={lang}/>
            <SecondaryContainer lang={lang}/>
          </>
      }

    </div>
  );
};

export default Browser;
