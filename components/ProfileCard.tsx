import styled from "styled-components";
import { UserProfile } from "@auth0/nextjs-auth0";

import Image from "next/image";

const ProfileCard = ({
  user,
  balance,
}: {
  user: UserProfile;
  balance?: number;
}) => {
  const { name, picture } = user;
  return (
    <Section>
      {!!picture ? (
        <>
          <StyledImage
            priority
            src={picture}
            height={144}
            width={144}
            alt={name ? name : undefined}
          />
          <p>{name}</p>
          <p>Account Balance: £{balance || 0}</p>
        </>
      ) : (
        "Loading"
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 450px;
  padding: 12px;
  border-radius: 3%;
  outline: solid 1px #1976d2;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

export default ProfileCard;
