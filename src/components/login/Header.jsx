import { useDispatch, useSelector } from "react-redux";
import { logoURL, SUPPORT_LANG } from "../../utils/constant";
import { changeLanguage } from "../../redux/configLangSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ROOT } from "../../../route";
import { language } from "../../utils/language";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const current_path = useLocation();

  const lang = useSelector(store => store.configLang.Language)

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    localStorage.setItem("language",e.target.value);

  }
  
  return (
    <div className="w-full flex justify-between items-center  pl-44 pr-10 py-2">
      <img className=" w-44 h-20 " src={logoURL} alt="netflix logo" />

      <div className="flex gap-10 items-center">
        <select name="Language_Drop_Down" id=""
          onChange={handleLanguageChange}
          className="rounded-md  text-md px-2 h-8 text-white outline-none border-2 border-white bg-black bg-opacity-70 ">
          {
            SUPPORT_LANG.map((lang, idx) => <option value={lang.identifier} key={idx}>{lang.name}</option>)
          }
        </select>

        {current_path.pathname !== "/" &&
          <button
            className="px-3 py-1.5 bg-red-600 text-white rounded-md cursor-pointer"
            onClick={() => {
              navigate(ROOT.LOGIN);
            }}
          >
            {language[lang]?.sign_in}
          </button>
        }
      </div>
    </div>
  );
};

export default Header;
