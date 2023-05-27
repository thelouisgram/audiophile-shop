import React from "react";
import Categories from "../components/Shared/Categories";
import { useEffect } from "react";
import HeroSection from "../components/Homepage/HeroSection";
import Zx9Speaker from "../components/Homepage/Zx9Speaker";
import Zx7Speaker from "../components/Homepage/Zx7Speaker";
import Yx1Earphones from "../components/Homepage/Yx1Earphones";
import { scrollToTop } from "../components/Utils/Shared";

const Home = () => {
  
  // Scroll to the top on re-render
  useEffect(() => {
    scrollToTop();
    document.title = "Audiophile Shop"
  }, []);

  return (
    <main>
      {/* Hero section */}
      <HeroSection />
      {/* Categories Section */}
      <Categories />
      {/* zx9 Speaker Section */}
      <Zx9Speaker />
      {/* zx7 speaker section */}
      <Zx7Speaker />
      {/* yx1 earphones section */}
      <Yx1Earphones />
    </main>
  );
};

export default Home;
