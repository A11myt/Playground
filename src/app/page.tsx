"use client";
import React, { useEffect, useRef } from "react";
import Menu from "@/components/atomics/radialMenu";
export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const test = getFourFifthsOfDisplaySize();

  function getFourFifthsOfDisplaySize() {
    return typeof window !== 'undefined' ? window.innerWidth * (4 / 5) : 0;
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollLeft / test) + Math.sign(e.deltaY);
        const scrollDistance = index * test - scrollRef.current.scrollLeft;
        scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div ref={scrollRef} className="h-screen w-full overflow-x-scroll flex flex-row">
        <div className="bg-futureGreen-50 h-full w-full flex-none flex justify-center items-center">
          <Menu />
        </div>
        <div className="bg-futureOrange-50 h-full w-full flex-none flex justify-center items-center">2</div>
        <div className="bg-blue-400 h-full w-full flex-none flex justify-center items-center">1</div>
      </div>

    </div>

  );
}