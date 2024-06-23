import React from "react";

interface IColorLibrary {
  name: string;
  colors: IColor[];
}

interface IColor {
  value: number;
  color: string;
}

export default function Colors() {
  const futureOrange: IColorLibrary = {
    name: "Future Orange",
    colors: [
      { value: 50, color: "bg-futureOrange-50" },
      { value: 100, color: "bg-futureOrange-100" },
    ],
  };
  const snow: IColorLibrary = {
    name: "Snow",
    colors: [
      { value: 50, color: "bg-snow-50" },
      { value: 100, color: "bg-snow-100" },
      { value: 200, color: "bg-snow-200" },
    ],
  };
  const night: IColorLibrary = {
    name: "Night",
    colors: [
      { value: 50, color: "bg-night-50" },
      { value: 100, color: "bg-night-100" },
      { value: 200, color: "bg-night-200" },
      { value: 300, color: "bg-night-300" },
    ],
  };

  const colorBars: IColorLibrary[] = [futureOrange, snow, night];

  return (
    <div className="flex flex-col h-full bg-white rounded-md p-4 gap-2">
      {colorBars.map((colorBar, index) => (
        // Fixed: Pass the entire colorBar object as a prop named 'color' instead of 'colors'
        <Colorbar key={index} color={colorBar} />
      ))}
    </div>
  );
}

function Colorbar({ color }: { color: IColorLibrary }) {
  return (
    <div className="flex flex-col">
      <span className="text-left mb-2">{color.name}</span>{" "}
      {/* Text aligned to the left with margin bottom */}
      <div className="flex flex-row ">
        {" "}
        {/* Removed unnecessary nested divs and applied gap directly */}
        {color.colors.map((color, index) => (
          <div>
            <div key={index} className={`w-12 h-12 ${color.color}`}></div>
            <div className="flex justify-center w-12">{color.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
