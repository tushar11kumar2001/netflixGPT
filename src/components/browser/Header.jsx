import React from 'react'
import { SUPPORT_LANG, logoURL, profileLogoURL } from "../../utils/constant";
import { useFirebaseContext } from "../../utils/firebaseContext";
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/gptSlice';
import { changeLanguage } from '../../redux/configLangSlice';


const Header = ({ userobj}) => {
    // const [photoURL, setPhotoURL] = useState(null);
    const firebaseContext = useFirebaseContext()
    const gptScreen = useSelector(store => store.gptScreen.toggleGPTScreen)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     firebaseContext.getUser(userobj.uid)
    //         .then(result => firebaseContext.getImageURL(result?.docs[0]?.data()?.imageURL)
    //             .then(result => setPhotoURL(result)));
    // }, [])

    const handlelogout = () =>  firebaseContext.logout();
    const handleToggleGPTScreen = () => dispatch(toggle());
    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value));
        localStorage.setItem("language",e.target.value);
        
    }
    
    return (
        <div className='w-full bg-black  flex justify-between items-center pl-10 pr-5'>

            <img className="w-36 h-20" src={logoURL} alt="netflix logo" />

            <div className='flex items-center gap-10'>

                <select
                    onChange={handleLangChange}
                    
                    className={` rounded-md  text-md px-2 h-8  outline-none ${gptScreen ? "bg-black bg-opacity-70 text-white border-2 border-white" : "bg-gray-300 text-black"}`}>
                    {
                        SUPPORT_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                    }
                </select>

                <button
                    onClick={handleToggleGPTScreen}
                    className='text-white bg-red-700 font-semibold px-4 py-2 rounded-md'>
                    {
                        gptScreen ? "Home" : "GPT Search"
                    }
                </button>

                <div className="group cursor-pointer">

                    <div>
                        <img
                            src={profileLogoURL}
                            alt="profile logo"
                            className="inline mr-2 rounded w-9 h-9 "
                        />
                        <span>
                            <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300 text-white"></i>
                        </span>
                    </div>

                    <ul className="fixed right-1 top-1 border border-white w-44 bg-black  text-white mt-4 hidden group-hover:block">
                        <li className=" py-3 pl-3 hover:text-lg">
                            <img src={profileLogoURL} className="w-10 h-10 rounded" />
                            {userobj?.displayName}
                        </li>
                        <li className=" py-3 pl-3 hover:text-lg"><i className="fa-solid fa-pen"></i> Manage Profile</li>
                        <li className=" py-3 pl-3 hover:text-lg"><i className="fa-solid fa-user"></i> Account</li>
                        <li className=" py-3 pl-3 hover:text-lg"><i className="fa-solid fa-question"></i> Help Center</li>
                        <li
                            className=" py-3 pl-3 border border-white hover:bg-red-600"
                            onClick={handlelogout}
                        >
                            Sign Out of Netflix
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header
