import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Participent from "./Participent";
import AboutUs from "./AboutUs";
import CompnyLogo from "./CompnyLogo";
import GetInTouch from "./GetInTouch";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Participent />
      <AboutUs />
      <GetInTouch />
      <CompnyLogo />
    </div>
  );
}

export default Home;
