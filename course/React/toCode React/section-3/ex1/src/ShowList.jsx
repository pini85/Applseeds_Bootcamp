import React from "react";

const ShowList = props => {
  const { item } = props;

  return <div>{item.map(country => [<li>{country.name}</li>])}</div>;
};

export default ShowList;
