import React from "react";

function Image(props) {
  const { image, name } = props;
  return (
    <div>
      <img className="image" src={image} alt={name} />
    </div>
  );
}

export default Image;
