import React from "react";
import "./App.css";
import "./components/List/list";
import List from "./components/List/list";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <List></List>;
  }
}

export default App;
