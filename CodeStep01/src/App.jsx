import { useState } from "react"
import BgDropdown from "./components/BgDropdown"
import Card from "./components/Card"
import Clock from "./components/Clock"
import Form from "./components/Form"
import { products, collegeData } from './data/products'
import Colledge from "./components/Colledge"


function App() {
  
  
const [bgColor,setBgColor]=useState('')
       const bgChangeHandler = (bgclr) =>{
          setBgColor(bgclr)
        }
  return (
    <>
      <Form />
     {products.map((prod) => (
      <div key={prod.id}>
         <Card data={prod}/>
      </div>
     ))}
     <select onChange={(e)=>bgChangeHandler(e.target.value)}>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
     <Clock bg={bgColor}/>
     
     <Colledge collegedata={collegeData} />
    </>
  )
}

export default App
