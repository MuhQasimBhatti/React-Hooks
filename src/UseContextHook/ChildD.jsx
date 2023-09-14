import React, { useContext } from 'react'
import { content } from '../App'

const ChildD = () => {
  const name = useContext(content);
  return (
    <div>i m Child D n have {name}</div>
  )
}

export default ChildD