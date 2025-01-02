import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROOT } from '../../route';

const BrowserProtectedWraper = ({children}) => {
  const navigate = useNavigate();
  const userobj = useSelector((store) => store.user);
 useEffect(() => { 
    if (!userobj?.uid) 
        return navigate(ROOT.LOGIN) 
    }, 
[userobj]);
  
  return (
    <div>
      {children}
    </div>
  )
}

export default BrowserProtectedWraper
