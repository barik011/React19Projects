import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const AuthLayout = ({children,authentication=true}) => {

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector((state)=>(state.auth.status))

    useeffect(()=> {
        //SIMPLE WAY TO CHECK FROM Auth Service
        // if(authStatus==true){
        //     navigate('/');
        // }
        // else if(authStatus==false){
        //     navigate('/login');
        // }

        if(authentication && authStatus !== authentication){
            navigate('/login');
        }
        elseif(!authentication && authStatus === authentication){
            navigate('/');
        }
        setLoader(false);
    },[authStatus,navigate,authentication]);

  return (loader ? <div>Loader....</div> : <div>{children}</div>)
}

export default AuthLayout