import React from "react";

export default function Navbar(props: { color: string; pages: number }) {
  return (
    <div className="p-2 h-[55px]">
      <div
        className={`w-full flex flex-row justify-between bg-light-50 ${props.color}`}
      >
        <h1 className="text-2xl">Playground</h1>
        <div className="flex items-center">
          <span className="px-2">Page </span>
          <input className="border-2 w-8 text-right shadow-inner border-[#eee]" />
          <span>/{props.pages}</span>
        </div>
      </div>
    </div>
  );
}
