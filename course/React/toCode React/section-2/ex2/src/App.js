import React, { useState } from "react";
import Seconds from "./Seconds";
import Hours from "./Hours";
import Minutes from "./Minutes";

import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(2);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(2);

  const handleSeconds = e => {
    setSeconds(e.target.value);
    setMinutes(e.target.value / 60);
    setHours(e.target.value / 3600);
  };
  const handleMinutes = e => {
    setMinutes(e.target.value);
    setSeconds(e.target.value * 60);
    setHours(e.target.value / 60);
  };
  const handleHours = e => {
    setHours(e.target.value);
    setSeconds(e.target.value * 3600);
    setMinutes(e.target.value * 60);
  };

  //when i type in 60 in seconds 1 minute should return
  return (
    <div>
      <Seconds time={seconds} change={handleSeconds}></Seconds>
      <Minutes time={minutes} change={handleMinutes}></Minutes>
      <Hours time={hours} change={handleHours}></Hours>
    </div>
  );
}

export default App;
