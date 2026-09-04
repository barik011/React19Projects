import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {

  const [todos,setTodos] =useState([]);

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]);
  }

  const updateTodo =(id,todo)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>(prev.filter((prevTodo)=>prevTodo.id !== id)))
  }

  const completeTodo = (id) =>{
    setTodos((prev)=>(prev.map((prevTodo)=> prevTodo.id===id? {...prevTodo, isComplete:!prevTodo.isComplete}:prevTodo )))
  }

  useEffect(()=>{
    const todoLocalList = JSON.parse(localStorage.getItem('todoList'));
    if(todoLocalList && todoLocalList.length >0){
      setTodos(todoLocalList);
    }
  })
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,completeTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoList />
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
