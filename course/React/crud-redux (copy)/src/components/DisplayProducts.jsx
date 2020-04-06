import React from "react";
import Card from "./Card";
import Update from "./Update";
import Delete from "./Delete";
const DisplayProducts = ({
  data,
  updatedValue,
  onChange,
  update,
  deleteItem,
}) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <Card name={item.name} avatar={item.avatar} />
            <Update
              value={updatedValue}
              onChange={onChange}
              item={item}
              update={update}
            />
            <Delete item={item} deleteItem={deleteItem} />
          </>
        );
      })}
    </div>
  );
};
export default DisplayProducts;
