import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-screen h-screen'>
      <h1>Theme Switch Using Context API</h1>
    </div>
  )
}

export default App
