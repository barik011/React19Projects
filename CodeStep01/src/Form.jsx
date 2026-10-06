import react,{ useState } from "react"

function Form() {
    const [skills,setSkills] =useState([]);
  
  const handleChecked =(e)=>{
    if(e.target.checked){
      setSkills((prev)=>[...prev,e.target.value])
    }
    else{
        setSkills((prev)=>[...prev.filter(item=>item!==e.target.value)])
        //setSkills((skills.filter(item=>item!==e.target.value)))
    } 
  }

  const [gender,serGender] = useState('female')
  const handleRadio=(e)=>{
    serGender(e.target.value)
  }
  
  const [city,setCity]=useState('');

  return (
    <div>
        <h1 className='text-center text-gray-700 text-2xl'>Form Control in React 19</h1>
      <div className='mx-auto w-2xl border-1 border-gray-300 p-2 mt-2 rounded'>
        <ul className="float">
          <li><input type="checkbox" onChange={handleChecked} value="php" id="php"  /><label htmlFor="php"/>PHP</li>
          <li><input type="checkbox" onChange={handleChecked} value="java" id="java"  /><label htmlFor="java"/>JAVA</li>
          <li><input type="checkbox" onChange={handleChecked} value="dotnet" id="dotnet"  /><label htmlFor="dotnet"/>DOTNET</li>
          <li><input type="checkbox" onChange={handleChecked} value="javascript" id="javascript"  /><label htmlFor="javascript"/>JAVASCRIPT</li>
        </ul>
      
      <div className="float gap-5 p-2">{skills}</div>
      </div>
      <div className='flex justify-between mx-auto w-2xl border-1 border-gray-300 p-2 mt-2 rounded'>
        <div >
        <ul>
          <li><input type="radio" checked={gender=='male'} onChange={handleRadio} value={"male"} name="gender" id="male"  /><label htmlFor="male"/>Male</li>
          <li><input type="radio" checked={gender=='female'} onChange={handleRadio} value={"female"} name="gender" id="female" /><label htmlFor="female"/>Female</li>
        </ul>
        <div className="gap-5 p-2 font-bold">{gender}</div>
        </div>
        <div >
          <select defaultValue={"noida"} onChange={(e)=>setCity(e.target.value)}>
            <option value={"delhi"} >Delhi</option>
            <option value={"noida"}>Noida</option>
            <option value={"gurgeow"}>Gurgeow</option>
          </select>
          <div className="float gap-5 p-2 font-bold">{city}</div>
        </div>
      
      </div>
    </div>
  )
}

export default Form