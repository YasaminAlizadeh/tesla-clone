import React from "react";
import styled from "styled-components";
import { DownArrow } from "../Assets/Images";

function Section({ title, backgroundImg }) {
  return (
    <Container backgroundImg={backgroundImg}>
      <SectionText>
        <h2>{title}</h2>
        <p>
          Order Online for <a href="#">Touchless Delivery</a>
        </p>
      </SectionText>
      <ButtonGroup>
        <LeftButton tabIndex="0">Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      <BouncingDownArrow>
        <DownArrow />
      </BouncingDownArrow>
    </Container>
  );
}

export default Section;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.5em;
  height: 100vh;
  background-image: ${(props) => props.backgroundImg};
  background-size: cover;
  background-position: center;
  font-family: var(--font-family);
`;

const SectionText = styled.div`
  flex: 1;
  margin-top: calc(16vh + 20px);
  text-align: center;
  color: #393c41;

  h2 {
    font-weight: 500;
    font-size: clamp(36px, 5vw, 40px);
  }

  p {
    font-size: 14px;

    a {
      color: black;
      text-decoration: none;
      box-shadow: 0 1px 0px 0px #393c41;
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 1.5px 0px 0px #393c41;
      }
    }
  }
`;

const ButtonGroup = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;

const LeftButton = styled.a`
  height: 40px;
  width: 256px;
  padding: 1em;
  opacity: 0.85;
  background-color: #171a20;
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  border-radius: 32px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  opacity: 0.85;
  background-color: white;
  color: black;
`;

const BouncingDownArrow = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
  animation: bouncing 2s infinite;

  svg {
    height: 100%;
    fill: black;
  }

  @keyframes bouncing {
    0%,
    20%,
    50%,
    80%,
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
    60% {
      -webkit-transform: translateY(3px);
      transform: translateY(3px);
    }
  }
`;
