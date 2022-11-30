import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Quote Generator</title>
        <meta
          name="description"
          content="Random Quote Generator - Dev Challenges"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Test</main>
    </div>
  );
}
