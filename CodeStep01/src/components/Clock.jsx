import React, { useEffect, useState } from 'react'

const Clock = ({bg}) => {
    const [time,setTime]=useState(new Date().toLocaleTimeString())
    const [bgColor,setBgColor]=useState('')
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])

   
  return (
    <>    
    <div style={{backgroundColor:bg}}>{time}</div>
    </>
    
  )
}

export default Clock