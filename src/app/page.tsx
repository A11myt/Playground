"use client";
import React, { useEffect, useRef } from "react";
import Menu from "@/components/atomics/radialMenu";
import TextCutter from "@/components/molecules/TextCutter";
import PrioList from "@/components/atomics/PrioList";
export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const test = getFourFifthsOfDisplaySize();

  function getFourFifthsOfDisplaySize() {
    return typeof window !== "undefined" ? window.innerWidth * (5 / 5) : 0;
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollRef.current) {
        const index =
          Math.round(scrollRef.current.scrollLeft / test) + Math.sign(e.deltaY);
        const scrollDistance = index * test - scrollRef.current.scrollLeft;
        scrollRef.current.scrollBy({
          left: scrollDistance,
          behavior: "smooth",
        });
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        className="h-[calc(100vh-55px)] w-full overflow-x-scroll flex flex-row"
      >
        <div className="bg-slate-800 h-full w-full flex-none flex justify-center items-center flex-col">
          <TextCutter />
          <div className="p-4 flex w-full h-32">
            <div className="rounded-md p-4 w-full flex items-center text-light-100 font-bold backdrop-blur-md bg-black/30 justify-between">
              <span>{"//"}Module Name - TextCutter</span>
              <span>
                Later {"->"} {"//"}icon lock function
              </span>
            </div>
          </div>
        </div>

        <div className="bg-futureGreen-50 h-full w-full flex-none flex justify-center items-center  flex-col">
          <Menu />
          <div className="p-4  flex w-full h-32">
            <div className="rounded-md p-4 w-full flex items-center text-light-100 font-bold backdrop-blur-md bg-black/30 justify-between">
              <span>{"//"}Module Name - Radial Menu</span>
              <span>
                Later {"->"} {"//"}icon lock function
              </span>
            </div>
          </div>
        </div>
        <div className="bg-futureGreen-50 h-full w-full flex-none flex justify-center items-center  flex-col">
          <div className='h-full'>
          <PrioList />
          </div>
          <div className="p-4  flex w-full h-32">
            <div className="rounded-md p-4 w-full flex items-center text-light-100 font-bold backdrop-blur-md bg-black/30 justify-between">
              <span>{"//"}Module Name - Radial Menu</span>
              <span>
                Later {"->"} {"//"}icon lock function
              </span>
            </div>
          </div>
        </div>


        <div className="bg-futureOrange-50 h-full w-full flex-none flex justify-center items-center">
          2
        </div>
        <div className="bg-blue-400 h-full w-full flex-none flex justify-center items-center">
          1
        </div>
      </div>
    </div>
  );
}
