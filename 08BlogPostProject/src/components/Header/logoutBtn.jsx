import React, { useEffect } from 'react'
import authServ from '../../appwrite/auth-services'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function logoutBtn() {

    const dispatch = useDispatch()

   const onLogoutHandler =()=>{
        authServ.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button 
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={onLogoutHandler}
    >logoutBtn</button>
  )
}

export default logoutBtn