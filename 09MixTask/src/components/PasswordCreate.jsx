import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const PasswordCreate = () => {
    const [length,setLength]=useState(2);
    const [numberAllawed,setNumberAllawed]=useState(false);
    const [charAllawed,setCharAllawed]=useState(false);
    const [password,setPawword] = useState('');

    const passwordGanerate = useCallback(()=>{
        let pass='';
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllawed) str +="0123456789"
        if(charAllawed) str +="!@#$%^&*()~`"

        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }
        setPawword(pass);
    },[numberAllawed,charAllawed,length,setPawword])

    useEffect(()=>{
        passwordGanerate();
    },[])


  return (
    <>
    <div className="border min-h-80 p-2 flex flex-col">
        <h2 className="text-2xl  font-bold">Password Generator</h2>
        <div className="flex flex-col h-40 my-12 p-10 bg-gray-200 rounded-2xl shadow-lg items-center justify-center mx-auto">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="bg-white border border-gray-300 rounded-l-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            readOnly
            value={password}
          />
          <button className= "text-white bg-gray-600 px-4 py-2 rounded-r-2xl" >
           Copy
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-1/6 mt-2"
            onChange={(e)=>setLength(e.target.value)}
            value={length}
          />
          <div className="ml-2 text-md">Length: {length}</div>
          
          <input
            type="checkbox"
            className="ml-1"
            onChange={(e)=>setLength(e.target.value)}
            />
          <label className="ml-1">add Numbers</label>
          <input
            type="checkbox"
            className="ml-1"    
            onChange={(e)=>setLength(e.target.value)}        
          />
          <label className="ml-1">add Symbols</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default PasswordCreate