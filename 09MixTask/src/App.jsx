import React from 'react'
import ListCars from './components/ListCars'
import TodoList from './components/TodoList'
import DigitalClock from './components/DigitalClock'
function App() {



  return (
    <div className="w-full h-full text-center p-5">
      <h1 className="text-4xl font-bold">Mix Task for React 19</h1>
      <div className="w-full flex flex-wrap justify-between items-center">
        <div className="w-1/2 h-1/2">
        <ListCars />
        </div>
      
      <div className="w-1/2 h-1/2">
      <TodoList />
      </div>
      <div className="w-1/2 h-1/2">
          <DigitalClock />
      </div>
      <div className="w-1/2 h-1/2 ">DDDDDDDDDDDDDD</div>
    </div>
    </div>
  )
}

export default App
