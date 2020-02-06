import React from "react";

const Seconds = props => {
  const { time, change } = props;

  return (
    <div>
      Seconds
      <input type="text" value={time} onChange={change} />
    </div>
  );
};
export default Seconds;
