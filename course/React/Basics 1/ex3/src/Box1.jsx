import React from "react";
import Box2 from "./Box2";

class Box1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box-1">
        <Box2 />
      </div>
    );
  }
}

export default Box1;
