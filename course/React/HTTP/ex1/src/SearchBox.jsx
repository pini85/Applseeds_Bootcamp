import React from "react";

const SearchBox = ({
  placeholder,
  value,
  handleChange,
  label,
  isDisabled,
  addProduct,
  error
}) => {
  return (
    <>
      <form action="#">
        <label for={label}>{label}: </label>
        <input
          placeholder={placeholder}
          type="search"
          value={value}
          id={label}
          onChange={handleChange}
        />
        <input disabled={isDisabled} type="submit" onClick={addProduct} />
      </form>
      {error}
    </>
  );
};
export default SearchBox;
