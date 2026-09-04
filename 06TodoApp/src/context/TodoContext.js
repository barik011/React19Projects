import {createContext,useContext} from 'react'

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoTile:"",
            isComplete:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id)=>{},
    deleteTodo:(is)=>{},
    completeTodo:(id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider