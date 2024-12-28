/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Search = () => {
  const items = ["Australia", "India", "Tamil", "Kerala", "Kooi"];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button>Search</button>

      <ul>
        {items.map((item, index) =>
          item.toLowerCase().includes(searchTerm.toLowerCase()) ? (
            <li key={index}>{item}</li>
          ) : null
        )}
      </ul>
      <p>{searchTerm}</p>
    </div>
  );
};

export default Search;
