import React, { useContext } from 'react'
import {content} from '../App'
import ChildD from './ChildD';
const ChildC = () => {
  const name=useContext(content);
  return (
    <div>
      {name}
      <ChildD/>
    </div>
  )
}

export default ChildC