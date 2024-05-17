import React from "react";

export default function Navbar(props: {
  color: string;
  pages: number;
  onClick: () => void;
}) {
  return (
    <div className="p-2 border-b border-gray-300 h-[55px] bg-white/30 backdrop-blur-md">
      <div className={`w-full flex flex-row justify-between  ${props.color}`}>
        <h1 className="text-2xl cursor-pointer" onClick={() => props.onClick()}>
          Playground
        </h1>
        <div className="flex items-center">
          <span className="px-2"> </span>
          <input className="w-8 text-right shadow-inner border-[#eee]" />
          <span>/{props.pages}</span>
        </div>
      </div>
    </div>
  );
}
