"use client";

import React, { useCallback, useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import { Header } from "./components";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <main>
        {posts.length > 0 ? (
          <ol>
            {posts.map((post) => (
              <div key={post.id}>
                <li>{post.title}</li>
              </div>
            ))}
          </ol>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
