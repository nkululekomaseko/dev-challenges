import Head from "next/head";
import QuoteViewStack from "../components/QuoteViewStack";
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
      <main>
        <QuoteViewStack />
      </main>
    </div>
  );
}
