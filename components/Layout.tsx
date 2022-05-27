import styles from "../styles/Home.module.css";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
