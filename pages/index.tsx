import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styled from "styled-components";

import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  const userId = user?.sub;
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (!!userId) {
      fetch(`https://spokesafe-test.herokuapp.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("~ data", data);
          setBalance(data.balance);
        });
    }
  }, [userId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <>
      <Head>
        <title>{user ? "Profile" : "Log in"}</title>
        <meta name="profile" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>{user ? "Profile" : "Log in"}</h1>
        {user ? (
          <ProfileCard user={user} balance={balance} />
        ) : (
          <ButtonWrapper>
            <Button variant="outlined" href="api/auth/login">
              Log in
            </Button>
            <Button variant="contained" href="api/auth/login">
              Sign up
            </Button>
          </ButtonWrapper>
        )}
      </Layout>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  > :not(:first-child) {
    margin-left: 8px;
  }
`;

export default Home;
