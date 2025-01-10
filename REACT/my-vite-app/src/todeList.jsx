/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const todeList = () => {
  const [data, setData] = useState("");
  const [prevData, setPrevData] = useState("");

  const handleTask = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input
        type="text"
        name="todo"
        placeholder="write the taskes"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={handleTask}>press to save </button>
      {/* <p>task:{[...data, ...prevData]}</p> */}
      <p>task:{data}</p>
    </div>
  );
};

export default todeList;
