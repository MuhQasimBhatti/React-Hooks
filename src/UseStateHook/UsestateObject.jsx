import React,{useState} from 'react'


const UsestateObject = () => {
    const [obj,setobj]=useState({no:1,name:'item1'})

    return (
    <div>
     <p>  This is an object having item number {obj.no} and name {obj.name}
    </p>
    <br/>
    <p>To change the details:</p>
    <br/>
    <input type='number' value={obj.no} onChange={e=>{setobj({...obj,no:e.target.value})}} /> 
  
    <input type='text' value={obj.name} onChange={e=>{setobj({...obj,name:e.target.value})}} /> 
    </div>
  
  )
}

export default UsestateObject