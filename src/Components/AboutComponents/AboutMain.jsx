import React from "react";
import AboutMediaContent from "./AboutMediaContent";
import AboutHero from "./AboutHero";
import WhoAreWe from "./WhoAreWe";

export default function AboutMain() {
  return (
    <div>
      <AboutHero />
      {/* <WhoAreWe /> */}
      <AboutMediaContent />
    </div>
  );
}
