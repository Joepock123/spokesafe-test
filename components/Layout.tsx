import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Menu />

      {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
};

export default Layout;
