import React, { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isEdit,setIsEdit] = useState(false);
    const [isEditIndex,setIsEditIndex] = useState(false);

    const addTask = (e) => {
        setNewTask(e.target.value);
    }
    const onAddHandler = () => {
        if (newTask != "") {
            setTasks((t) => [...t, newTask]);
        }
        setNewTask('')
    }
    const onEditHandler=(index)=>{
        const task= tasks.filter((_,i)=>i==index);

        if(task.length > 0){
            setNewTask(task)
            setIsEditIndex(index)
            setIsEdit(true)
        }
        
    }
    const  onUpdateHandler=()=>{
            if (newTask != "") {                
                 setTasks((oldTask)=> tasks.map((task,i)=>{
                    return i===isEditIndex?newTask:'oldTask'
                }))
            }            
        }
    const onDeleteHandler =(index)=>{
        const filterTasks= tasks.filter((_,i)=>i!==index);
        setTasks(filterTasks)
    }
    const onMoveUpHandler =(index)=>{
        if(index>0){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]   
        setTasks(updatedTask)  
        }   
    }
    const onMoveDownHandler =(index)=>{
        if(index < tasks.length-1){
        const updatedTask = [...tasks];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask)  
        }
    }

    return (
        <div className="w-1/2 h-1/2 border min-h-80 p-2 flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-2">Todo List with Move Activity</h1>
            <div className="mb-2 w-2xl">
                <input type='text' value={newTask} onChange={addTask}
                    placeholder='Please Enter Task'
                    className='border border-gray-300 shadow-2xl max-w-72  p-1'
                />
                
                <button
                    onClick={isEdit?onUpdateHandler: onAddHandler}
                    className={`${isEdit? "w-22":"w-10"} bg-amber-700 border-0 cursor-pointer
                     py-1 text-white font-bold rounded-br-md rounded-tr-md`}
                     >{isEdit?'Update':'Add'}</button>
            </div>
            <ul className='flex flex-col justify-center items-center gap-2'>
                {
                    tasks.map((task, i) => (
                        <li key={i} className='flex justify-between items-center w-96 p-1 bg-gray-100 border border-gray-300 rounded-md'>
                            <div className=''>
                            <span className='text-green-700 font-semibold text-2xl'>{task}</span>
                            </div>
                            <div className=' flex gap-2'>
                            
                            <button onClick={()=>onMoveUpHandler(i)} className='bg-blue-300 rounded-md p-1'>
                            👆
                            </button>
                            <button onClick={()=>onMoveDownHandler(i)} className='bg-blue-300 rounded-md p-1'>
                            👇
                            </button>
                            <button
                                onClick={()=>onEditHandler(i)}
                                className='bg-blue-300 rounded-md p-1'
                            >📌</button>
                            <button
                                onClick={()=>onDeleteHandler(i)}
                                className='bg-blue-300 rounded-md p-1'
                            >⛔</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList