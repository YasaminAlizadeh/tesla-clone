import React from "react";
import styled from "styled-components";
import { Model3, ModelS, ModelX, ModelY, DownArrow } from "../Assets/Images";

function Section() {
  return (
    <Container>
      <SectionText>
        <h2>Model 3</h2>
        <p>Order Online for Touchless Delivery</p>
      </SectionText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
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
  gap: 2em;
  height: 100vh;
  background-image: url(${Model3});
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
`;

const ButtonGroup = styled.section`
  display: flex;
  gap: 2em;
`;

const LeftButton = styled.a`
  height: 40px;
  width: 256px;
  padding: 1em;
  opacity: 0.85;
  background-color: #171a20;
  color: white;
  font-size: 12px;
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
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    fill: black;
  }
`;
