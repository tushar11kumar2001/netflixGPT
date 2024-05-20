import React from 'react'
import { SUPPORT_LANG, logoURL, profileLogoURL } from "../../utils/constant";
import { useEffect, useState } from "react";
import { useFirebaseContext } from "../../utils/firebaseContext";
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../redux/gptSlice';
import { changeLanguage } from '../../redux/configLangSlice';


const Header = ({ userobj }) => {
    // const [photoURL, setPhotoURL] = useState(null);
    const firebaseContext = useFirebaseContext()
    const gptScreen = useSelector(store => store.gptScreen.toggleGPTScreen)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     firebaseContext.getUser(userobj.uid)
    //         .then(result => firebaseContext.getImageURL(result?.docs[0]?.data()?.imageURL)
    //             .then(result => setPhotoURL(result)));
    // }, [])

    function handlelogout() { firebaseContext.logout() }
    function handleToggleGPTScreen() {
        dispatch(toggle());
    }
    function handleLangChange(e){
        dispatch(changeLanguage(e.target.value));
    }
    return (
        <>
            <div className="fixed w-full bg-gradient-to-b from-black/75 px-10 py-1 flex justify-between items-center z-10">
                <img className=" w-36 " src={logoURL} alt="netflix logo" />
            </div>

            <>
                {
                    gptScreen ? <select 
                    onChange={handleLangChange}
                    className='fixed right-56 top-4 z-10 p-2 rounded-md bg-black bg-opacity-70 text-white border-none outline-none'>
                        {SUPPORT_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                    </select> : ""
                }

                <button
                    onClick={handleToggleGPTScreen}
                    className='text-white bg-red-700 font-semibold px-4 py-2 rounded-md fixed right-32 top-4 z-10'>{gptScreen ? "Home" : "GPT Search"}</button>
                <div className=" fixed  right-14 top-4 group cursor-pointer flex flex-col items-end z-10">
                    <div>
                        <img
                            src={profileLogoURL}
                            alt="profile logo"
                            className="inline mr-2 rounded w-9 h-9"
                        />
                        <span>
                            <i className="fa-solid fa-caret-down group-hover:rotate-180 duration-300"></i>
                        </span>
                    </div>
                    <ul className=" border border-white w-44 bg-black bg-opacity-70 text-white mt-4 hidden group-hover:block">
                        <li className=" py-3 pl-3 hover:text-lg">
                            <img src={profileLogoURL} className="w-10 h-10 rounded" />
                            {userobj?.displayName}
                        </li>
                        <li className=" py-3 pl-3 hover:text-lg">Manage Profile</li>
                        <li className=" py-3 pl-3 hover:text-lg">Account</li>
                        <li className=" py-3 pl-3 hover:text-lg">Help Center</li>
                        <li
                            className=" py-3 pl-3 border border-white hover:bg-red-600"
                            onClick={handlelogout}
                        >
                            Sign Out of netflix
                        </li>
                    </ul>
                </div>
            </>

        </>
    )
}

export default Header
