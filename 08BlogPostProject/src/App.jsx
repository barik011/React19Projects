import { useEffect, useState } from "react"
import authServ from "./appwrite/auth-services";
import {useDispatch} from 'react-redux'
import { login, logout } from "./store/authSlice";
import { Header,Footer } from "./components";
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch();
  useEffect(()=>{
    authServ.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    }).finally(()=>setLoading(false))
  })
  return !loading?(
    <div className="min-h-screen flex flex-wrap content-between bg-grya">
      <div className="w-full">
        <Header />
          <main>
           Todo: <Outlet />
          </main>
        <Footer />
      </div>
    </div>
  ):(<div>loading...</div>);
}

export default App
