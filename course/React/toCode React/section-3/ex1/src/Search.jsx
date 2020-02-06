import React, { useState } from "react";

const Search = props => {
  const { search } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = e => {
    setSearchQuery(e.target.value);
    search(searchQuery);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Click</button>
    </div>
  );
};

export default Search;
