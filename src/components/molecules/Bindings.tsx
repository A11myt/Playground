import React from "react";
import { Section } from "../atomics/Section";

export const Bindings = ({ bgColor }: { bgColor: string }) => {
  return (
    <Section bgColor={bgColor}>
      <button> ASDF</button>
      <div className="flex-grow flex">
        {" "}
        <div className="bg-sky-50 flex border border-black p-2 w-32 rounded">
          ASDFG
        </div>{" "}
        <span>Testoasda</span>
        <div className="bg-sky-50 flex border border-black p-2 w-32 rounded">
          Test
        </div>{" "}
        <div className="bg-sky-50 flex border border-black p-2 w-32 rounded">
          Test
        </div>{" "}
        <div className="bg-sky-50 flex border border-black p-2 w-32 rounded">
          Test
        </div>
      </div>
    </Section>
  );
};
