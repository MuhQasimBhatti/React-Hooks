import React,{createContext} from 'react'
import ChildA from "./UseContextHook/ChildA"
import Usestate from "./UseStateHook/Usestate"
import Useref from "./UseRefHook/Useref";
import Useeffect from "./UseEffectHook/Useeffect";
import Usememo from './UseMemoHook/Usememo';
import Usecallback from'./UseCallBackHook/Usecallback';
import Usereducer from "./UseReducerHook/Usereducer";

const content=createContext();


const App = ()=> {

  const name='fareha'

  return (
    <div>

      {/* ====Use Reducer Hook===
      <Usereducer/> */}


      {/* ====Use CallBack Hook===
      <Usecallback/> */}


      {/* ====Use Memo Hook====
      <Usememo/> */}


      {/* ====Use Effect Hook====
      <Useeffect/> */}


      {/* ====Use REf Hook====
      <Useref/> */}
     
     
      {/* ====Use State Hook====
      <Usestate/>
      <UsestateArray/>
      <UsestateObject/> */}


      {/* =====Use Content Hook====
      <content.Provider value={name}>
        <ChildA/>
      </content.Provider> */}
    </div>
  )
}

export default App
export {content}