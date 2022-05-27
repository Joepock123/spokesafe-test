import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

import styles from "../styles/Home.module.css";
import { UserType } from "./api/user";

const Home: NextPage = () => {
  const [data, setData] = useState<UserType>();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("api/user")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta name="profile" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>Profile</h1>
          <ProfileCard user={data} />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
