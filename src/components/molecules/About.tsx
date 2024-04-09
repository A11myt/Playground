import React, { Component } from "react";
import { Section, SplitSection } from "../atomics/Section";

interface AboutProps {
  content: string;
  bgColor: string;
  skills: string[];
  firstColor: string;
  secondColor: string;
}

export const About = ({ content, bgColor, skills, firstColor, secondColor }: AboutProps) => {
  return (
    <SplitSection
      title="About Me"
      bgColor={bgColor}
      firstColor={firstColor}
      secondColor={secondColor}
      height={["h-96", "h-48"]}
      containerCorrectionValue={[100, 10]}
    >
      {content}
    </SplitSection>
  );
};
