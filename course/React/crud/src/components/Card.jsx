import React from "react";
const Card = ({ name, avatar }) => {
  return (
    <>
      <div>{name}</div>
      <div>
        <img src={avatar} alt={name} />
      </div>
    </>
  );
};
export default Card;
