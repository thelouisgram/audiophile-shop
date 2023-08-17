// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Categories from "../components/Shared/Categories";
import { handlePageRender } from "../Utils/Shared";
import RevealDiv from "../components/RevealDiv";
import HeroSection from "../pages/Homepage/HeroSection";
import Zx9Speaker from "../pages/Homepage/Zx9Speaker";
import Zx7Speaker from "../pages/Homepage/Zx7Speaker";
import Yx1Earphones from "../pages/Homepage/Yx1Earphones";

const Home = () => {
  // Scroll to the top on re-render
  useEffect(() => {
    handlePageRender('')
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
