import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;

// Create an app that behaves like a chat app - it has a simple form with a text input and a send button, and on
// each click the text is added to a list of messages that are displayed after the form. (a chat app for whoever
// likes to chat with himself)
// The form and message list should each be in a separate component.
