/* eslint-disable no-unused-vars */
import React from "react";

let initialState = 0;
let reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

const useReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch("inc")}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch("dec")}>-</button>
    </div>
  );
};

export default useReducer;
