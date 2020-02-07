import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./Posts.component";
import Users from "./Users.component";

function App() {
  const [id, setId] = useState(1);
  const handleChange = e => {
    return setId(parseInt(e.target.value));
  };
  return (
    <div>
      <input type="Number" value={id} onChange={handleChange} />
      <Users id={id} />
      <Posts id={id} />
    </div>
  );
}

export default App;
