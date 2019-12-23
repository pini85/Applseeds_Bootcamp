import React from "react";
import data from "./data";

const Messages = () => {
  console.log(data);

  return (
    <div>
      {data.map(message => {
        console.log(message);

        return <div>{message}</div>;
      })}
    </div>
  );
};

export default Messages;
