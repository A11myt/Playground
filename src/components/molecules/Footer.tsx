import React from "react";
import { Section } from "../atomics/Section";

export const Footer = ({ bgColor }: { bgColor: string }) => {
  return (
    <div>
      <div className={`${bgColor} flex justify-between border-y border-main-10 `}>
        <span className="pr-2 border-r border-main-10 grid content-center">
          Hamburg, Germany
        </span>
        <span className="p-2 border-main-10">
          Jason Johnson • jason.j@ASDF.de • +555 Banane
        </span>
      </div>
      <Section bgColor={bgColor}>
        <div className="mt-10 mb-10 text-accent-25 grid grid-cols-3 justify-items-center">
          <span>Archiv</span>
          <span>Impressum</span>
          <span>Cookie-Einstellungen</span>
        </div>
      </Section>
    </div>
  );
};
