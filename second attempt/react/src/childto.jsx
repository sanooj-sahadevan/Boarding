/* eslint-disable react-hooks/rules-of-hooks */

const childto = ({ setData }) => {
  const sendDateToParent = () => {
    let x = "SAY MY NAME ";
    setData(x);
  };

  return (
    <div>
      <button onClick={sendDateToParent}>presss</button>
    </div>
  );
};

export default childto;
