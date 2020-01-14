import React from "react";

const SearchBox = ({ placeholder, value, handleChange }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default SearchBox;
