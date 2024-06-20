import React, { useState, useEffect } from 'react';

export default function Menu() {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']; // Add more items as needed
  const radius = 100; // The radius of the circle

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: React.MouseEvent) => {
    const boundingRect = (event.currentTarget as Element).getBoundingClientRect();
    setMousePosition({
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    });
  };

  const renderPlusSign = () => (
    <div className='text-[30px] text-gray-500 font-serif'>+</div>
  );

  // This function returns a JSX element representing a radial menu
  const renderRadialMenu = () => (
    <div className=''>
      {items.map((item, index) => {
        // The angle for each item in the radial menu is calculated
        const angle = (index / items.length) * 2 * Math.PI;
        // The x and y coordinates for each item are calculated using the angle and the radius
        const itemX = radius * Math.cos(angle);
        const itemY = radius * Math.sin(angle);
        return (
          <div
            key={index}
            className='absolute text-center'
            style={{
              transform: `translate(${itemX - 15}px, ${itemY - 12}px)`,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );

  const renderLines = () => (
    <>
      <div className='border-l z-10 border-gray-400 h-[80vh] absolute transform '></div>
      <div className='border-l z-10 border-primary-500 h-96 absolute transform  rotate-45'></div>
      <div className='border-l z-10 border-gray-400 h-[60vw] absolute transform -rotate-90'></div>
      <div className='border-l z-10 border-primary-500 h-96 absolute transform  -rotate-45'></div>
      <div className='w-20 h-20 bg-light-900 rounded-full absolute'></div>
    </>
  );

  const renderMousePosition = () => (
    <div className='text-gray-500'>X: {mousePosition.x} | Y: {mousePosition.y}</div>
  );

  return (
    <div className='p-4 w-full h-full flex flex-col justify-between' onMouseMove={handleMouseMove}>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='p-4 w-full h-full  flex flex-col justify-between'>
          <div className='w-full flex justify-between'>
            {renderPlusSign()}
            {renderPlusSign()}
          </div>
          <div className='flex items-center justify-center relative'>
            {renderLines()}
            {renderRadialMenu()}
          </div>
          <div className='w-full flex justify-between items-end'>
            {renderPlusSign()}
            {renderMousePosition()}
          </div>

        </div>
      </div>
    </div>
  );
}
