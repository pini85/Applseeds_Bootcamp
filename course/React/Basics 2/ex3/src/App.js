import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./child";

class App extends React.Component {
  state = { check: false };

  handleOnChange = event => {
    this.setState({ check: event.target.checked });
  };
  render() {
    const { check } = this.state;

    return (
      <div>
        <div>hi</div>
        <input
          type="checkbox"
          onChange={this.handleOnChange}
          checked={this.state.isChecked}
        />
        {check ? <Child /> : null}
      </div>
    );
  }
}

export default App;
