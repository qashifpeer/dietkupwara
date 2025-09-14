import React from "react";
import AboutDiet from "./AboutDiet";
import PrincipalMessage from "./PrincipalMessage";

const AboutSection = () => {
  return (
    <div className="w-full h-full pb-4 bg-gradient-to-tr from-cyan-100 from- via-red-50 via- to-lime-100 to-">
      <div className="md:flex max-w-7xl mx-auto">
        <PrincipalMessage />
        <AboutDiet />
      </div>
    </div>
  );
};

export default AboutSection;
