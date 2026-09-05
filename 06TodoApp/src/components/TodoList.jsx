import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoList({ todo }) {

    const {todos,updateTodo,deleteTodo,completeTodo}=useTodo()
    const [isEditable,setIsEditable] =useState(false)
    const [todoTitle,setTitodoTitle] =useState(todo.todo);

    const onEdit = () =>{
        updateTodo(todo.id,{...todo, todo:todoTitle});
        setIsEditable(false);
    }

    const onCompleteTodo = () =>{
        completeTodo(todo.id)
    }
    
    const onDeleteTodo = () =>{
        deleteTodo(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black"
            ${todo.isComplete? "bg-[#c6e9a7]" : "bg-[#ccbed7]" }
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isComplete}
                onChange={onCompleteTodo}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-gray-950 
                ${isEditable?"border-black/10 px-2 bg-white opacity-50 text-black" : "border-transparent"}
                ${todo.isComplete?"line-through":""}
                `}
                value={todoTitle}
                onChange={(e)=>setTitodoTitle(e.target.value)}
                readOnly={!isEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    if(todo.isComplete) return

                    if(isEditable){
                        onEdit()
                    }
                    else{
                        setIsEditable((prev)=>!prev)
                    }
                        
                }}
                disabled={todo.isComplete}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={onDeleteTodo}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoList;
