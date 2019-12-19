import React from "react";
import Box1 from "./Box1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className="container">
        <Box1 />
      </div>
    );
  }
}

export default App;

// We want to create 4 components: Box1, Box2, Box3 and Box4. Box1 is the big green box.
// Box4 is the smallest purple box – we use it twice. Note that the boxes contain one
// another. Box 1 contains Box2, which contains Box3, which contains 2 Box4 components.
// Box1 should be a class component
