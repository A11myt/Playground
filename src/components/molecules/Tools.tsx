import React, { Component } from "react";
import Image from "next/image";
import { Section } from "../atomics/Section";
import { Tool } from "../atomics/Tool";
import myData from "./../../../public/projects.json";
 
interface Tools {
  bgColor: string;
  children: React.ReactNode;
}

export const Tools = ({ bgColor, children }: Tools) => {
  return (
    <Section bgColor={bgColor}>
      <span>Projekte</span>
      <div className="grid grid-cols-3 justify-items-center grid-flow-column  gap-8 pb-16 pt-16">
        {children}
      </div>
    </Section>
  );
};