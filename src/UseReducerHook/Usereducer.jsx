import React, { useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment1":
      return { ...state, count1: state.count1 + action.value };
      break;
    case "Decrement1":
      return { ...state, count1: state.count1 - action.value };
      break;
    case "Increment2":
      return { ...state, count2: state.count2 + action.value };
    case "Decrement2":
      return { ...state, count2: state.count2 - action.value };
    case "Reset":
      return initialState;
    default:
      break;
  }
};

const Usereducer = () => {
  const [counts, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div> Count1 = {counts.count1}</div>
      <div> Count2 = {counts.count2}</div>
      <button onClick={() => dispatch({ type: "Increment1", value: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "Decrement1", value: 1 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "Increment2", value: 10 })}>
        Increment10
      </button>
      <button onClick={() => dispatch({ type: "Decrement2", value: 10 })}>
        Decrement10
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Usereducer;
