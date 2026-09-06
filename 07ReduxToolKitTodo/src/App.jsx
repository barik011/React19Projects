
import './App.css'
import TodoForm from '../components/TodoForm'
import TodosList from '../components/TodosList'

function App() {

  return (
    <>    
    <div className='flex flex-col justify-center items-center w-full py-5 mt-10'>
      <h1 className=''>Todo Project Using React Redux Toolkit</h1>
      <TodoForm />
      <TodosList /> 
      </div>    
    </>
  )
}

export default App
