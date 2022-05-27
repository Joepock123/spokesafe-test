import Image from "next/image";
import { UserType } from "../pages/api/user";
import styles from "../styles/Home.module.css";

const ProfileCard = ({ user }: { user?: UserType }) => {
  const { firstName, lastName, picture, balance } = user || {};
  console.log("~ picture", picture);
  return (
    <div className={styles.container}>
      {!!user ? (
        <>
          <Image
            priority
            src={picture}
            height={144}
            width={144}
            alt={`${firstName} ${lastName}`}
          />
          <p>
            {firstName} {lastName}
          </p>
          <p>Account Balance: £{balance}</p>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ProfileCard;
