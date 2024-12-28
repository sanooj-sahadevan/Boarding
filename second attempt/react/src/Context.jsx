import Sibling1 from "./sibling1";
import Sibling2 from "./sibiling2";
import {AppProvider} from './useContext'

const Context = () => {
  return (
    <div>
      <AppProvider>
        <h1>communxtion use context</h1>
        <Sibling1 />
        <Sibling2 />
      </AppProvider>
    </div>
  );
};

export default Context;
