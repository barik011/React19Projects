import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    if(count>=20) return alert("Counter not greater then 20");
    setCount(count + 1)
  }

  const handleDecrease = () => {
    if(count<=0) return alert("Counter not lower then 0");
    setCount(count - 1)
  }
  

  return (
    <>
      <section id="center">
       
        <div>
          <h1>Get started | {count}</h1>
          
        </div>
        <button
          type="button"
          className="counter"
          onClick={handleIncrease}
        >
          Increase Count
        </button>
        <button
          type="button"
          className="counter"
          onClick={handleDecrease}
        >
          Dicrese Count
        </button>
      </section>
  </>
  )
}

export default App
