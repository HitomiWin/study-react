import styles from "../page.module.css";
import Head from "next/head";
import { Header } from "../components";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main>About</main>
    </div>
  );
}
