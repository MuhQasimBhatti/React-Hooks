import React, { useCallback,useState } from 'react'
import Child from "./Child";


const Usecallback = () => {

    const [add,updateadd]=useState(0)
    const [run,updaterun]=useState(0)

    const runfunction = useCallback(()=>{},[])

    return (
    <div>
        <Child runfunction={runfunction} run={run}/>
        <p>{add}</p>
        <button type='button' onClick={()=>updateadd(add+1)}>Add</button>
        <p>{run}</p>
        <button type='button' onClick={()=>updaterun(run+1)}>Run</button>
    </div>
  )
}

export default Usecallback