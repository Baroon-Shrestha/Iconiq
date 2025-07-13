import React from "react";
import HomeHero from "./HomeHero";
import HomeCTA from "./HomeCTA";
import Intro from "./Intro";
import HomeServices from "./HomeServices";
import HomePorjects from "./HomePorjects";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <Intro />
      <HomeServices />
      <HomePorjects />
      <HomeCTA />
    </div>
  );
}
