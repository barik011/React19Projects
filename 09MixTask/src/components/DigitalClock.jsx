import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timeInterval);
        }
    },[])

    const formateTime =()=>{
        let hour =time.getHours();
        const minutes = time.getMinutes();
        const second = time.getSeconds();
        const meridium = hour >= 12 ? 'PM' :'AM'
        return `${postAdd(hour) }:${postAdd(minutes)}:${postAdd(second)} ${meridium}`
    }
    const postAdd=(number)=>{
          return number<10? '0'+ number :''+number
    }

  return (
    <div className='border min-h-80 p-2 flex flex-col justify-center items-center'>
        <h4 className='text-5xl font-bold mb-2'>Digital Clock</h4>
        <div className='p-2 backdrop-blur-md bg-amber-300 text-6xl font-bold rounded-md'>
            {formateTime()}
        </div>
    </div>
  )
}

export default DigitalClock