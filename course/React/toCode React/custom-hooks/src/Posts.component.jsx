// import React, { useState, useEffect } from "react";
import React from "react";
import useFetch from "./effects/use-fetch.effect";

const Posts = ({ id }) => {
  console.log(id);

  const posts = useFetch(
    id,
    `https://jsonplaceholder.typicode.com/posts?id=${id}`
  );
  //   const [posts, setPosts] = useState(null);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const res = await fetch(
  //         `https://jsonplaceholder.typicode.com/posts?id=${id}`
  //       );
  //       const posts = await res.json();
  //       setPosts(posts[0]);
  //       console.log(posts);
  //     };
  //     fetchPosts();
  //   }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      {posts ? (
        <>
          <h3>{posts.title}</h3>
          <h6>{posts.body}</h6>
        </>
      ) : (
        <p>Posts not found</p>
      )}
    </div>
  );
};

export default Posts;
