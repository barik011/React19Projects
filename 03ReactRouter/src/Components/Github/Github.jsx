import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div className='bg-amber-100 h-6/12 w-screen flex justify-center items-center'>
        <div className='w-2xl flex justify-end items-center m-3'>
            <img src={data.avatar_url} width="200"/>
        </div>
        <div className='w-2xl'>
            <h2>Total Followers: {data.followers}</h2>
        </div>
    </div>
  )
}
export default Github

export const fetchApiData = async() =>{
    const response = await fetch('https://api.github.com/users/barik011')
    return response.json();
}