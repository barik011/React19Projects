import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username,setUsername] =useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)
    const onLoginHandler = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div className='flex flex-col w-2/3 justify-center items-center bg-gray-200 rounded'>
        <h2>Login User Interface </h2>
        <input type='text' className='' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={onLoginHandler} className='btn-primary'>Login</button>
    </div>
  )
}

export default Login