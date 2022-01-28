import React from "react";
import Section from "./Section";
import styled from "styled-components";
import {
  Model3,
  ModelS,
  ModelX,
  ModelY,
  SolarPanels,
  SolarRoof,
  Accessories,
} from "../Assets/Images";

function Home() {
  return (
    <Container className="container">
      {sections.map(
        ({
          title,
          description,
          backgroundImg,
          leftBtn,
          rightBtn,
          bouncingBtn,
        }) => (
          <Section
            title={title}
            description={description}
            backgroundImg={`url(${backgroundImg})`}
            leftBtn={leftBtn}
            rightBtn={rightBtn}
            bouncingBtn={bouncingBtn}
            key={`${title}_${new Date().getTime()}`}
          />
        )
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

// ------------------- Sections info -------------------
const sections = [
  {
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    backgroundImg: Model3,
    leftBtn: "Custom order",
    rightBtn: "Existing Inventory",
    bouncingBtn: true,
  },
  {
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    backgroundImg: ModelY,
    leftBtn: "Custom order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    backgroundImg: ModelS,
    leftBtn: "Custom order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    backgroundImg: ModelX,
    leftBtn: "Custom order",
    rightBtn: "Existing Inventory",
  },
  {
    title: "Solar Panels",
    description: "Lowest Cost Solar Panels in America",
    backgroundImg: SolarPanels,
    leftBtn: "Order now",
    rightBtn: "Learn more",
  },
  {
    title: "Solar Roof",
    description: "Produce Clean Energy From Your Roof",
    backgroundImg: SolarRoof,
    leftBtn: "Order now",
    rightBtn: "Learn more",
  },
  {
    title: "Accessories",
    backgroundImg: Accessories,
    leftBtn: "Shop now",
  },
];
