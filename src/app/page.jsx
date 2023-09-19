"use client";

import styles from "./page.module.css";
import Head from "next/head";
import { Header, Posts } from "./components";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Posts />
      </main>
    </div>
  );
};

export default Home;
