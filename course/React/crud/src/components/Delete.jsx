import React from "react";

const Delete = ({ item, deleteItem }) => {
  return (
    <div className="delete">
      {" "}
      <button onClick={() => deleteItem(item.id)}>DELETE</button>
    </div>
  );
};
export default Delete;
