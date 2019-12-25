import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { getProduct } from "./api";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}
export default App;
