import React, { useState } from "react";
import { findByLabelText } from "@testing-library/dom";

function App() {
  const data = [
    ["Name", "Country", "Email"],
    ["dan", "Israel", "dan@gmail.com"],
    ["dana", "Israel", "dana@gmail.com"],
    ["anna", "Israel", "anna@gmail.com"],
    ["zina", "UK", "zina@gmail.com"]
  ];

  return (
    <div>
      <SortableTable data={data} />
    </div>
  );
}

const SortableTable = props => {
  const { data } = props;
  const [name, setName] = useState(data.map(items => items[0]));
  const [country, setCountry] = useState(data.map(items => items[1]));
  const [email, setEmail] = useState(data.map(items => items[2]));

  const sortTable = e => {
    if (e.target.id == "Name-h") {
      data[1].sort((a, b) => b - a);
    }
  };

  const styleSection = {
    display: "inline-block",
    textAlign: "center",
    margin: "0 2px 0 2px",
    border: "1px solid black",
    width: "auto"
  };
  const styleItem = {
    boxSizing: "border-box",
    borderBottom: "1px solid black"
  };

  return (
    <div>
      <div style={styleSection}>
        {name.map(item => {
          return <div style={styleItem}>{item}</div>;
        })}
      </div>
      <div style={styleSection}>
        {country.map(item => {
          return <div style={styleItem}>{item}</div>;
        })}
      </div>
      <div style={styleSection}>
        {email.map(item => {
          return <div style={styleItem}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
