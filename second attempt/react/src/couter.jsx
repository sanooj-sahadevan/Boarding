/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const couter = () => {
  const [count, setCount] = useState(0);
const Increment = ((e)=>{
    
    setCount(count+1)
})
const Decrement = ((e)=>{
    if(count>0){
        setCount(count-1)
    }
   
})

  return (
    <div>
      <button onClick={Increment} >+</button>
      <p>{count}</p>
      <button  onClick={Decrement}  >-</button>
    </div>
  );
};

export default couter;
