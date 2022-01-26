import React from "react";
import styled from "styled-components";
import { TeslaLogo } from "../Assets/Images";

function Header() {
  return (
    <Container>
      <Logo>
        <TeslaLogo />
      </Logo>
      <NavigationBar>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </NavigationBar>
      <Links>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </Links>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em 0.5em 0 2.7em;
  font-family: var(--font-family);
`;

const Logo = styled.div`
  height: 100%;

  svg {
    height: 0.7em;
  }
`;

const NavigationBar = styled.nav`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: #171a20;
    text-decoration: none;
    padding: 0.5em 0.75em;
    border-radius: 12px;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      background-color: #00000014;
    }
  }

  @media screen and (max-width: 1200px) {
    a {
      display: none;
    }
  }
`;

const Links = styled(NavigationBar)`
  @media screen and (max-width: 1200px) {
    a:last-child {
      display: flex;
    }
  }
`;
