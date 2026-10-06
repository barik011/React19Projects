import React from 'react'

const BgChanger = () => {
  return (
    <>
    <div className='border rounded h-[300] w-full'>
        <div className='bg-amber-200 h-full w-full'></div>
        <div className='flex items-center justify-center gap-1'>
            <button className='bg-red-500 text-white font-bold p-2'>Red</button>
            <button className='bg-green-500 text-white font-bold p-2'>Green</button>
            <button className='bg-blue-500 text-white font-bold p-2'>Blue</button>
        </div>
    </div>
    </>
  )
}

export default BgChanger