import React, { useState } from 'react'

const Usestate = () => {
    const [age,setage]=useState(18)

    return (
    <div>
        My age is {age}
        <button type='button' onClick={() => setage (age-1)}> Last year </button>
        <button type='button' onClick={() => setage (age+1)}> Next year </button>
    </div>
  )
}

export default Usestate