import React from "react";
import data from "./data";
import Messages from "./Messages";

class Form extends React.Component {
  state = { message: "" };
  handleChange = e => {
    this.setState({ message: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    data.push(this.state.message);
    this.setState({ message: "" });
    console.log(data);
  };
  render() {
    const { message } = this.state;

    return (
      <div>
        <form action="#">
          <input type="text" onChange={this.handleChange} value={message} />
          <button type="submit" onClick={this.onSubmit}>
            Click
          </button>
        </form>
        <Messages />
      </div>
    );
  }
}

export default Form;
