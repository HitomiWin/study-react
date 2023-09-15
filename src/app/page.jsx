"use client";

import styles from "./page.module.css";
import Head from "next/head";
import { Header, Posts } from "./components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <main>
        <Posts />
      </main>
    </div>
  );
};

export default Home;
