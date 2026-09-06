import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from '../src/app/store'
import { removeTodo,editTodo } from '../src/features/todo/todoSlice'

function TodosList() {
    const todos = useSelector((state)=>(state.todos))

    const dispatch = useDispatch()

    const onRemoveHandler = (id) => {
        dispatch(removeTodo(id))
        }

    const onEditHandler = (id) => {
        dispatch(editTodo(id))
    }

  return (
    <>
        <ul className="list-none w-3xl">
        {
            todos.map((todo)=>(
            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <div className='text-white w-full' >{todo.title}</div>

            <button 
            className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
            onClick={()=>onEditHandler(todo.id)}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z" fill="#0D0D0D"/></svg>
            </button>
            <button             
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md mx-1"
            
            onClick={()=>onRemoveHandler(todo.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
            ))
        }
          
        </ul>
    </>
  )
}

export default TodosList