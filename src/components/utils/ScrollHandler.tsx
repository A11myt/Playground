import React, { useEffect, useRef } from "react";

export default function ScrollHandler({ children }: { children: React.ReactNode }) {
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
    <div ref={scrollRef} className="h-[calc(100vh-55px)] w-full overflow-x-scroll flex flex-row">
      {children}
    </div>
  );
}