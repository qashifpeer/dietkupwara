import React from "react";
import AboutDiet from "./AboutDiet";
import PrincipalMessage from "./PrincipalMessage";

const AboutSection = () => {
  return (
    <div className="w-full h-full pb-4 bg-gradient-to-r from-rose-100 from- via-lime-200 via-100% to-rose-100 to-100%">
      <div className="md:flex max-w-7xl mx-auto">
        <PrincipalMessage />
        <AboutDiet />
      </div>
    </div>
  );
};

export default AboutSection;
