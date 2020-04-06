import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import Update from "./Update";
import Delete from "./Delete";
const DisplayProducts = ({
  data,
  updatedValue,
  onChange,
  update,
  deleteItem,
  ...props
}) => {
  console.log(props.products);

  return (
    <div>
      {props.products.map((item) => {
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
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, null)(DisplayProducts);
