import React, { Component } from "react";
import Image from "next/image";
import profile from "./../../../public/images/profile.png";
import "../../tailwind.css";
import { Section } from "../atomics/Section";

interface HeroProps {
  title: string;
  content: string;
  bgColor: string;
}

export const Hero = ({ title, content, bgColor }: HeroProps) => {
  return (
    <React.Fragment>
      <Section bgColor={bgColor}>
        <div className="flex w-full flex-col items-center justify-center py-12  h-[80vh]">
          <Image src={profile} alt="ERRROR" className="h-60 w-60 rounded-full shadow-2xl  shadow-black/40 mt-8 sm:mt-0 priority" priority />
          <div className="mt-8 flex max-w-full flex-col items-center px-6 transition-all sm:max-w-2xl sm:px-12 xl:max-w-4xl">
            <div className="animate-slide-in-left text-center text-2xl transition-all sm:text-2xl font-DMMono">
              {title}
            </div>
            <div className="animate-slide-in-left mt-6 md:mt-8 text-center text-lg transition-all md:text-xl">
              {content}
            </div>
          </div>
        </div>
        <div className="flex h-[14vh] w-full items-center justify-center">
          <div>
            <div className="rounded-full w-3 h-8 bg-main-10 animate-bounce"></div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};
