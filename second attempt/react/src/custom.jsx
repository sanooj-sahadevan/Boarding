/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useCustom = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      try {
        const x = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        console.log(x, "pp");
        const result = await x.json();
        setState(result);
      } catch (error) {
        console.error(error);
      }
    };

    fectData();
  }, []);
  return <div></div>;
};

export default useCustom;
