/* eslint-disable react-hooks/rules-of-hooks */
import useCustom from "./useCustom"; // Import the custom hook

const customss = () => {

    const {state} = useCustom()
    console.log(state);
    
  return (
    <div>
      <h1>HEY</h1>
      <ul>
        {state &&
          state.map((item) => {
            <li key={item.id}>{item.name}</li>;
            
          })}
      </ul>
    </div>
  )
}

export default customss
