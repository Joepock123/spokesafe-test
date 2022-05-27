import type { NextPage } from "next";
import Head from "next/head";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Booking</title>
        <meta name="booking" content="A booking page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Booking</h1>
          <Button variant="outlined">Cancel</Button>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
