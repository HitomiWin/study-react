"use client";

import React, { useCallback, useState, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <div>...Loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (posts.length === 0) {
    return <div>No Data</div>;
  }

  return (
    <ol>
      {posts.map((post) => (
        <div key={post.id}>
          <li>{post.title}</li>
        </div>
      ))}
    </ol>
  );
};
