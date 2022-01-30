import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <Wrap shouldShowMenu={isMenuOpen}>
      <MenuContainer shouldShowMenu={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          <CloseIcon />
        </CloseButton>
        <MenuLinks>
          <a href="/#">Existing Inventory</a>
          <a href="/#">Used Inventory</a>
          <a href="/#">Trade-In</a>
          <a href="/#">Test Drive</a>
          <a href="/#">Cybertruck</a>
          <a href="/#">Roadster</a>
          <a href="/#">Semi</a>
          <a href="/#">Charging</a>
          <a href="/#">Powerwall</a>
          <a href="/#">Commercial Energy</a>
          <a href="/#">Utilities</a>
          <a href="/#">Find Us</a>
          <a href="/#">Support</a>
          <a href="/#">Investor Relations</a>

          <LanguageButton>
            <LanguageIcon />
            <p className="country">United States</p>
            <p className="language">English</p>
          </LanguageButton>
        </MenuLinks>
      </MenuContainer>
    </Wrap>
  );
}

export default Menu;

const Wrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  opacity: ${(props) => (props.shouldShowMenu ? "1" : "0")};
  visibility: ${(props) => (props.shouldShowMenu ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100vh;
  width: 22em;
  padding: 2.5em 2em;
  background-color: #fffffff9;
  z-index: 3;
  font-size: 0.8rem;
  font-family: var(--font-family);
  font-weight: 600;
  transform: ${(props) => (props.shouldShowMenu ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: right;
  transition: transform 0.6s ease-in-out;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  svg {
    margin: 0.2em;
    fill: #575b63;
    cursor: pointer;
  }

  &:hover {
    background-color: #393c4111;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  a {
    padding: 0.55em 0.7em;
    color: #393c41;
    border-radius: 11px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover {
    background-color: #393c4111;
  }
`;

const LanguageButton = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 0.3em 0.7em;
  padding: 0.7em 0.5em;
  color: #4a4d53;
  border-radius: 10px;
  cursor: pointer;

  svg {
    grid-area: 1/ 1/ 3/ 2;
    fill: #575b63;
  }

  .language {
    width: max-content;
    font-size: 0.7rem;
    font-weight: 500;
    transition: border-bottom 0.5s ease-in-out, padding-bottom 0.5s ease-in-out;

    &:hover {
      border-bottom: 2px solid black;
      padding-bottom: -1px;
      color: #18191b;
    }
  }

  &:hover {
    background-color: #393c4111;
  }
`;
