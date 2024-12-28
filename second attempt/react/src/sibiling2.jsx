import  { useContext } from "react";
import { AppContext } from "./useContext";

const Sibling2 = () => {
  const { data } = useContext(AppContext);

  return (
    <div>
      <h2>Sibling 2</h2>
      <p>Shared Data: {data}</p> 
    </div>
  );
};

export default Sibling2;
