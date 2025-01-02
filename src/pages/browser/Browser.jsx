import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import { MoviesListThunks } from "../../redux/MoviesSlice";
import GPTScreen from "../../components/gpt/GPTScreen";

const Browser = () => {
  const dispatch = useDispatch();
  const lang = useSelector(store => store.configLang.Language)
  const gptScreen = useSelector(store => store.gptScreen.toggleGPTScreen)
  const userobj = useSelector((store) => store.user);

  useEffect(() => { dispatch(MoviesListThunks()) }, [])




  return (
    <div className="">
      <div className="fixed z-20 w-full">
        <Header userobj={userobj} />
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
