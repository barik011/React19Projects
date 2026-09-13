import React from 'react'
import {authServ} from '../appwrite/auth-services'
import {login,logout} from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Input,Button,Logo} from '../components'
import {useForm} from 'react-hook-form'
import { useState } from 'react'

const Signup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register,handleSubmit} = useForm()
  const [error,setError] = useState('')

  async function SignupForm(data){
    setError('');
    try {
          const userData = await authServ.createAccount(data)
          if(userData){
            dispatch(login(userData))
          }
          else{
            dispatch(logout())
          }
          
    } catch (error) {
      setError(error.massage)
      
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
           <p className="mt-2 text-center text-base text-black/60">
           Already have an account?
           <link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">Sign In</link>
           </p>
           {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
          <form onSubmit={handleSubmit(SignupForm)} className='mt-4'>
            <div className='space-y-5'>
              <Input 
              type="text"
              label="Full Name:"
              placeholder="Enter Full Name"
              {...register("name",{required:true})}
              />
            </div>
            <div className='space-y-5'>
              <Input 
              type="text"
              label="email:"
              placeholder="Enter email"
              {...register("email",{required:true})}
              />
            </div>
          </form>
      </div>
    </div>
  )
}

export default Signup