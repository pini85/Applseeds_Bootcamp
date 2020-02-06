import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("https://swapi.co/api/films/1/");

      const resJson = await response.json();
      setData(resJson);
    };
    fetchFunc();
  }, []);
  return <div>{data ? <ShowMovie data={data} /> : "Loading"}</div>;
}

const ShowMovie = props => {
  const { data } = props;

  return (
    <div>
      <div>
        Movie title:
        {data.title}
      </div>
      <div>Director: {data.director}</div>
    </div>
  );
};

export default App;
