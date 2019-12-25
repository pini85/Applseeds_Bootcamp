import React from "react";
import data from "./data";

const Messages = () => {
  console.log(data);

  return (
    <div>
      {data.map((message, i) => {
        return <div key={i}>{message}</div>;
      })}
    </div>
  );
};

export default Messages;
