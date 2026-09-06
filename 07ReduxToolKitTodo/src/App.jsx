import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full flex justify-center item-center'></div>
      <h1 className=''>Todo Project Using React Redux Toolkit</h1>
    </>
  )
}

export default App
