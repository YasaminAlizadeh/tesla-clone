import React from "react";
import Section from "./Section";
import { Model3, ModelS, ModelX, ModelY } from "../Assets/Images";

function Home() {
  return (
    <div>
      <Section title="Model 3" backgroundImg={`url(${Model3})`} />
      <Section title="Model Y" backgroundImg={`url(${ModelY})`} />
      <Section title="Model S" backgroundImg={`url(${ModelS})`} />
      <Section title="Model X" backgroundImg={`url(${ModelX})`} />
      <Section />
    </div>
  );
}

export default Home;
