import React, { useState, useEffect } from "react";
import ShowList from "./ShowList";
import Search from "./Search";

const List = () => {
  const [data, setData] = useState([]);
  //   const [filteredData, setFilteredData] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const resJson = await response.json();
      setData(resJson);
    };
    fetchFunc();
  }, []);

  const search = input => {
    setSearchField(input);
  };

  const filter = data.filter(item => {
    return item.name.toLowerCase().includes(searchField);
  });

  return (
    <div>
      <Search search={search}></Search>
      <ShowList item={filter} />
    </div>
  );
};

export default List;
