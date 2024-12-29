/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  const incrementCounter = () => {
    counterRef.current += 1; // Increment the value in the ref
    setCount(counterRef.current); // Update state to trigger re-render
  };

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Display the updated counter value */}
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
