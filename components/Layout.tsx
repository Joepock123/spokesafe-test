import styled, { css } from "styled-components";
import { min } from "../styles/breakpoints";
import Menu from "./Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Menu />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.main`
  background: white;
  height: 100vh;
  text-align: center;

  ${min.mobile(css`
    margin: 0 auto;
    width: 900px;
  `)}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
