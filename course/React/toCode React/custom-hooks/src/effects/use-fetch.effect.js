import { useState, useEffect } from "react";

const useFetch = (id, url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const dataArray = await response.json();
      setData(dataArray[0]);
    };
    fetchData();
  });
  return data;
};

export default useFetch;

//react naming practice is that  if we create custom hooks we need to call them use and then their functionality
//Our component gets the id from props we only need to change the url
