import React from 'react'

const Colledge = ({collegedata}) => {
  return (
    <div className='mx-auto w-1/2'>
        {
        collegedata.map((college,i)=>{
          return(
            
          <ul key={i} className="list-disc list-inside">
          <li className=" list-item">{college.name}</li>
          <li>{college.city}</li>
          <li>{college.address}</li>
          
            
              {college.students.map((stud)=>(
               <ul className="list-disc list-inside " key={stud.roll_no}> 
                <li>{stud.stud_name}</li>
                <li>{stud.course}</li>
                </ul>
              ))}
              
            
          
          </ul>)
        })        
      }
    </div>
  )
}

export default Colledge