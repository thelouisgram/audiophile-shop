import React, { useEffect } from "react";
import Categories from "../components/Shared/Categories";
import { scrollToTop } from "../components/Utils/Shared";
import RevealDiv from "../components/RevealDiv";
import HeroSection from "../components/Homepage/HeroSection";
import Zx9Speaker from "../components/Homepage/Zx9Speaker";
import Zx7Speaker from "../components/Homepage/Zx7Speaker";
import Yx1Earphones from "../components/Homepage/Yx1Earphones";

const Home = () => {
  // Scroll to the top on re-render
  useEffect(() => {
    scrollToTop();
    document.title = "Audiophile Shop";
  }, []);

  return (
    <main>
      {/* Hero section */}
      <HeroSection />

      {/* Categories Section */}
      <RevealDiv>
        <Categories />
      </RevealDiv>

      {/* zx9 Speaker Section */}
      <RevealDiv>
        <Zx9Speaker />
      </RevealDiv>

      {/* zx7 speaker section */}
      <RevealDiv>
        <Zx7Speaker />
      </RevealDiv>

      {/* yx1 earphones section */}
      <RevealDiv>
        <Yx1Earphones />
      </RevealDiv>
    </main>
  );
};

export default Home;
