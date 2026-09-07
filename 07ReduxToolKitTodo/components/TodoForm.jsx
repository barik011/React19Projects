import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,updateTodo } from '../src/features/todo/todoSlice';

function TodoForm() {
    const [input,setInput] =useState('');

    const dispatch = useDispatch();
    const editTodo = useSelector((state)=>(state.editTodo))
    const onAddTodoHandler = (e) => {
        e.preventDefault();
        if(editTodo){
            dispatch(updateTodo({id:editTodo.id,title:input}));
            setInput('');
        }
        else{
        dispatch(addTodo(input));
        setInput('');
        }
    }

    useEffect(()=>{
          if (editTodo) {
    setInput(editTodo.title)
  }
}, [editTodo])
  return (
    <form onSubmit={onAddTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editTodo?'Update Todo':'Add Todo'}
      </button>
    </form>
  )
}

export default TodoForm