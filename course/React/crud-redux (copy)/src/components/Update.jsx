import React from "react";

const Update = ({ value, onChange, item, update }) => {
  console.log(value);

  return (
    <div className="update">
      <input value={value} onChange={onChange} type="text" />
      <button onClick={() => update(item.id)}>UPDATE</button>
    </div>
  );
};
export default Update;
