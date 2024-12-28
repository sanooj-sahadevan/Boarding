const child = ({ setInputValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="type da"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default child;
