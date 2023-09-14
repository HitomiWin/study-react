import styles from "./page.module.css";
import Head from "next/head";
import { Header } from "./components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <main>Index</main>
    </div>
  );
}
