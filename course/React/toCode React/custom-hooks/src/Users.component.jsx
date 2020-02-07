// import React, { useState, useEffect } from "react";
import React from "react";
import useFetch from "./effects/use-fetch.effect";

const Users = ({ id }) => {
  const user = useFetch(
    id,
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
  //   const [user, setUser] = useState(null);
  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/users?id=${id}`
  //       );
  //       const user = await response.json();
  //       setUser(user[0]);
  //     };
  //     fetchUser();
  //   }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users</h1>
      {user ? (
        <>
          <h4>{user.name}</h4>
          <h6>{user.email}</h6>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default Users;
