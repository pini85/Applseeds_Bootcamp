import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert("Component mounted");
  }
  render() {
    return <div>hi</div>;
  }
}

export default App;
