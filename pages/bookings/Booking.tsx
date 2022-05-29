import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { useRouter } from "next/router";
import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Booking: NextPage = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleCancel = async () => {
    if (user?.sub) {
      await fetch(`https://spokesafe-test.herokuapp.com/users/${user?.sub}`, {
        method: "PUT",
      });
      router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>Booking</title>
        <meta name="booking" content="A booking page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Booking</h1>
        <Section>
          <StyledImage
            priority
            src="/spokesafe-city.jpg"
            height={144}
            width={144}
            alt="booking-image"
          />
          <p>Location: Soho</p>
          <p>Date: Monday 18th September</p>
          <p>Spaces: 2</p>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Section>
      </Layout>
    </div>
  );
};

const Section = styled.section`
  width: 450px;
  padding: 12px;
  border-radius: 3%;
  outline: solid 1px #1976d2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

export default Booking;

export const getServerSideProps = withPageAuthRequired();
