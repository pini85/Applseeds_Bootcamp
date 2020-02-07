import React, { useState } from "react";

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
  const [headers] = useState(data[0].map(items => items));
  // block.gallery.slice(1).map(...)
  const [name, setName] = useState(data.slice(1).map(items => items[0]));
  const [country, setCountry] = useState(data.slice(1).map(items => items[1]));
  const [email, setEmail] = useState(data.slice(1).map(items => items[2]));
  let [order, setOrder] = useState(false);

  const sortTable = (target, setState) => {
    setOrder(!order);
    order
      ? eval(setState)([...eval(target)].sort())
      : eval(setState)([...eval(target)].sort().reverse());
  };

  const styleSection = {
    display: "inline-block",
    textAlign: "center",
    margin: "0 2px 0 2px",
    border: "1px solid black",
    width: "8rem"
  };

  const styleHeaders = {
    display: "flex",
    width: "25rem",
    justifyContent: "space-around",
    border: "1px solid black"
  };

  return (
    <div>
      <div style={styleHeaders}>
        {headers.map(header => {
          return (
            <div
              onClick={e => sortTable(e.target.id, `set${header}`)}
              key={header}
              id={header.toLowerCase()}
            >
              {header}
            </div>
          );
        })}
      </div>
      <div style={styleSection}>
        {name.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </div>
      <div style={styleSection}>
        {country.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div style={styleSection}>
        {email.map(item => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default App;
