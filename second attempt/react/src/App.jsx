/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Counter from "./couter";
import Reducer from "./useReducer";
import Custom from "./custom";
import Search from "./Search";
import Child from "./child";
import Context from "./Context";
import Childto from "./childto";
import Useref from "./Useref";
import CounterRef from "./counterref";
function App() {
  // const [count, setCount] = useState(0)
  //const [input, setInput] = useState("");
  const [data, setData] = useState("");

  return (
    <>
      {/* <div>
        <h1>{input} </h1>
        <Child setInputValue={setInput} />
      </div> */}

      {/* <div>
        <p>{data}</p>
        <Childto setData={setData} />
      </div> */}
      {/* <Useref/> */}
      <CounterRef />
      {/* <Counter /> */}
      {/* <Reducer/> */}
      {/* <Custom /> */}
      {/* <Search/> */}
      {/* <Context/> */}
    </>
  );
}

export default App;
