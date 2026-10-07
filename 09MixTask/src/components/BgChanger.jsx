import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
  let [bgColor,setBgColor] =useState('bg-amber-200')
  const handlerBgColor =(clr)=>{
      setBgColor(clr)
  }
  return (
    <>
    <div className='border rounded h-[400] w-full flex flex-col justify-between items-center'>
        <div className={`${bgColor} h-70 w-full`}></div>
        <div className='flex items-center justify-center gap-1'>
            <button onClick={()=>handlerBgColor('bg-red-500')} className='bg-red-500 text-white font-bold p-2'>Red</button>
            <button onClick={()=>handlerBgColor('bg-green-500')} className='bg-green-500 text-white font-bold p-2'>Green</button>
            <button onClick={()=>handlerBgColor('bg-blue-500')} className='bg-blue-500 text-white font-bold p-2'>Blue</button>
        </div>
    </div>
    </>
  )
}

export default BgChanger