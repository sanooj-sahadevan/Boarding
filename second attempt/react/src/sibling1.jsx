import { useContext } from "react";
import { AppContext } from "./useContext";

const Sibling1 = () => {
  const { setData } = useContext(AppContext);

  return (
    <div>
      <h2>Sibling 1</h2>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setData(e.target.value)} // Update shared data
      />
    </div>
  );
};

export default Sibling1;
