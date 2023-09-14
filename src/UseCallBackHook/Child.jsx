import React,{memo} from 'react'

const Child = (runfunction,run) => {
    console.log("Running")
    return (
    <div> <h>Hello I m Child Function</h></div>
  )
}

export default memo (Child)