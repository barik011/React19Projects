import React from 'react'
import ListCars from './components/ListCars'
import TodoList from './components/TodoList'
function App() {



  return (
    <div className="w-full h-full text-center p-5">
      <h1 className="text-4xl font-bold">Mix Task for React 19</h1>
      <div className="w-full h-1/2 flex flex-wrap">
      <ListCars />
      <div className="w-full h-1/2 flex flex-wrap">
      <TodoList />
      </div>
      <div className="w-1/2 h-1/2 border">CCCCCCCCCCCCCC</div>
      <div className="w-1/2 h-1/2 border">DDDDDDDDDDDDDD</div>
    </div>
    </div>
  )
}

export default App
