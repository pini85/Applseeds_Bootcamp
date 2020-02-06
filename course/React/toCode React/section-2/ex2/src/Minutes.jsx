import React from "react";

const Minutes = props => {
  const { time, change } = props;
  return (
    <div>
      Minutes
      <input type="text" value={time} onChange={change} />
    </div>
  );
};
export default Minutes;
