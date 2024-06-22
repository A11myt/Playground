import React from 'react';

interface IColor {
    name: string;
    value: string;
    colors: string[];
}

export default function Colors() {
    const futureOrange: IColor = {
        name: "Future Orange",
        value: "futureOrange",
        colors: ["bg-futureOrange-50", "bg-futureOrange-100"]
    };
    const snow: IColor = {
        name: "Snow",
        value: "snow",
        colors: ["bg-snow-50", "bg-snow-100", "bg-snow-200"]
    };
    const night: IColor = {
        name: "Night",
        value: "night",
        colors: ["bg-night-50", "bg-night-100", "bg-night-200", "bg-night-300"]
    };

    const colorBars: IColor[] = [futureOrange, snow, night];

    return (
        <div className="flex flex-col h-full bg-white rounded-md p-4 gap-2">
            {colorBars.map((colorBar, index) => (
                // Fixed: Pass the entire colorBar object as a prop named 'color' instead of 'colors'
                <Colorbar key={index} color={colorBar} />
            ))}
        </div>
    );
}

function Colorbar({ color }: { color: IColor }) {
    return (
        <div className='flex flex-col'>
            <span className="text-left mb-2">{color.name}</span> {/* Text aligned to the left with margin bottom */}
            <div className='flex flex-row '> {/* Removed unnecessary nested divs and applied gap directly */}
                {color.colors.map((color, index) => (
                    <div key={index} className={`w-16 h-16 ${color}`}></div>
                ))}
            </div>
        </div>
    );
}