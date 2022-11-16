import React from "react";
import Build from "./About Data/Build";
import Program from "./About Data/Program";
import Statistics from "./About Data/Statistics";

const About = () => {
  return (
    <>
    {/* Program Image Unresponsive */}
      <Program />
      <Statistics />
      <Build />
    </>
  );
};

export default About;
