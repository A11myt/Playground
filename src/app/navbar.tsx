import React from "react";

export default function Navbar(props: {
  color: string;
  pages: number;
  onClick: () => void;
  toggleDarkMode: () => void;
}) {
  return (
    <div className="p-2 border-b border-gray-300 h-[55px] bg-white/30 backdrop-blur-md">
      <div className={`w-full flex flex-row justify-between  ${props.color}`}>
        <h1 className="text-2xl cursor-pointer" onClick={props.onClick}>
          Playground
        </h1>
        <div className="flex items-center"><span className="px-2"> </span>
          <button className="w-full h-8 flex items-center justify-center border-2 border-black rounded-md"
            onClick={() => props.toggleDarkMode()}>
            <span className="text-xs">DM</span>
          </button>
        </div>
      </div>
    </div>
  );
}
