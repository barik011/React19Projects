import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos:[],
   editTodo:null
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                title:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        editTodo:(state,action)=>{
            state.editTodo = action.payload
        },
        updateTodo:(state,action)=>{
            const index = state.todos.findIndex((todo)=>todo.id===action.payload.id)
            state.todos[index]=action.payload
            state.editTodo=null;
        },
    }
})

export const {addTodo,removeTodo,updateTodo,editTodo} = todoSlice.actions 

export default todoSlice.reducer