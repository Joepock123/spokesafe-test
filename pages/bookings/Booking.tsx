import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Booking: NextPage = () => {
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
          <p>Location</p>
          <p>Date</p>
          <Button variant="outlined">Cancel</Button>
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
