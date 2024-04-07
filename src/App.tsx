import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Carousel from "./Components/Carousel";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

type Props = {};

function App({}: Props) {
  return (
    <>
      <Navbar />
      <HeroSection />
          <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
        {/* <Carousel/>  */}
        <Pricing />
        <Workflow />
        <Testimonials/>
      </div>
    </>
  );
}

export default App;
