import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Participent from "./Participent";
import AboutUs from "./AboutUs";
import CompnyLogo from "./CompnyLogo";
import GetInTouch from "./GetInTouch";
import BoardOfDirectors from "./BoardOfDirectors";

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Participent />
      <AboutUs />
      <BoardOfDirectors />
      <GetInTouch />
      <CompnyLogo />
    </div>
  );
}

export default Home;
