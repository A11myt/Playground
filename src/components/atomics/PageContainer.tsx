import React, { useEffect, useState } from "react";

export default function PageContainer({ pageNumber, name, children, bgColor }: { pageNumber: number, name: string, children: React.ReactNode, bgColor: string }) {

  return (
    <div className="h-full justify-between w-full flex-none flex items-center flex-col" style={{ backgroundColor: bgColor }}>
      {children}
      <div className="p-4 flex w-full h-32">
        <div className="rounded-md p-4 w-full flex items-center text-light-100 font-bold backdrop-blur-md bg-black/30 justify-between">
          <span>{"//"}{name}  {pageNumber}</span>
          <span>Later {"->"} {"//"}icon lock function</span>
        </div>
      </div>
    </div>
  );
}
