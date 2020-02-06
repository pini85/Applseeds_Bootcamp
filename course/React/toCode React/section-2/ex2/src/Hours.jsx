import React from "react";

const Hours = props => {
  const { time, change } = props;
  return (
    <div>
      Hours
      <input type="text" value={time} onChange={change} />
    </div>
  );
};
export default Hours;
