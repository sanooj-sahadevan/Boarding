/* eslint-disable no-unused-vars */
import { useRef } from "react";

const Useref = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" placeholder="type chy" />
      <button onClick={handleFocus}>Focus on Input</button>
    </div>
  );
};

export default Useref;
