import { useUser } from "@auth0/nextjs-auth0";

import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{user ? "Profile" : "Log in"}</title>
        <meta name="profile" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>{user ? "Profile" : "Log in"}</h1>
          {user ? (
            <ProfileCard user={user} />
          ) : (
            <Button variant="contained" href="api/auth/login">
              Log in
            </Button>
          )}
        </main>
      </Layout>
    </div>
  );
};

export default Home;
