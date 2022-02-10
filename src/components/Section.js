import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Section({
  id,
  title,
  description,
  backgroundImg,
  leftBtn,
  rightBtn,
  bouncingBtn,
}) {
  return (
    <Container id={id} className="section" backgroundImg={backgroundImg}>
      <SectionText className="fade">
        <h2 id="section-title">{title}</h2>
        <p id="section-description-text">
          {description.text}
          <a id="section-description-link" href={description.link_URL}>
            {description.link_title}
          </a>
        </p>
      </SectionText>
      <ButtonGroup className="fade">
        <LeftButton id="section-leftBtn">{leftBtn}</LeftButton>
        {rightBtn && (
          <RightButton id="section-rightBtn">{rightBtn}</RightButton>
        )}
      </ButtonGroup>
      {bouncingBtn && (
        <BouncingDownArrow>
          <ExpandMoreIcon />
        </BouncingDownArrow>
      )}
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
  /* scroll-snap-align: center; */
  font-family: var(--font-family);
`;

const SectionText = styled.div`
  flex: 1;
  position: fixed;
  top: calc(14vh);
  text-align: center;
  color: #393c41;

  h2 {
    font-weight: 500;
    font-size: clamp(36px, 5vw, 40px);
  }

  p {
    font-size: 13px;
    margin-top: 0.7em;

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
  position: fixed;
  bottom: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
`;

const LeftButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 240px;
  padding: 1em;
  opacity: 0.85;
  background-color: #171a20;
  color: white;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 32px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  opacity: 0.85;
  background-color: white;
  color: black;
`;

const BouncingDownArrow = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
  animation: bouncing 2s infinite;

  svg {
    height: 100%;
    fill: #333a47;
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
