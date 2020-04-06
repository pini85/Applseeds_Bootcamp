import React from "react";
const Create = ({ value, onChange, isDisabled, create }) => {
  return (
    <div className="create">
      <form action="#">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="prodcuts"
          value={value}
          onChange={onChange}
        />
        <input disabled={isDisabled} onClick={create} type="submit" />
      </form>
    </div>
  );
};
export default Create;
