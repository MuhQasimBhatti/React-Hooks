import React,{useState,useRef} from 'react'

const Useref = () => {
    const refElement=useRef(null)

    const [name,setname] = useState('Tabish')
   function reset()
    {
      setname('')
      refElement.current.focus()
    }
    
  return (
    <div>
        <input ref={refElement} type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Useref