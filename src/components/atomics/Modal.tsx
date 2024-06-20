import React from "react";

export default function Modal({
  number,
  name,
  children,
  bgColor,
  isOpen,
  onClose,
}: {
  number: number;
  name: string;
  children: React.ReactNode;
  bgColor?: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="w-full h-full max-h-fit inset-0 bg-red/30 bg-opacity-50 justify-center items-center  "
      style={{ backgroundColor: `${bgColor}4D` || "transparent" }}>
      <div className={`flex flex-col h-full  rounded-md w-full overflow-auto p-10`}>
        <div className='w-full flex justify-between items-baseline'>
          {renderPlusSign()}
          <div className="flex w-full justify-end ">
            <button className="w-6 h-6 border-2 border-black bg-futureOrange-50 rotate-45  text-light-100 flex justify-center items-center rounded-md"
              onClick={() => onClose()}>
              <span className="px-[-1px] text-4xl">+</span>
            </button>
          </div>
        </div> 
        <div className="h-full overflow-hidden p-5">
          {children}
        </div>
        <div className='w-full flex justify-between items-end'>
          {renderPlusSign()}
          {renderPlusSign()}
        </div>

        <div className="p-4 flex w-full h-24 ">
          <div className="rounded-md p-auto w-full flex items-center text-gray-800/90 font-bold backdrop-blur-md bg-black/10 justify-between">
            <div className="grid grid-flow-col h-full items-center">
              <span className="align-center border-gray-800/90 border-r px-3 font-black text-2xl">
                2024
              </span>
              <div className="flex flex-col font-bold p-2">
                <span className="text-sm"> 7th </span>
                <span className="text-sm"> May </span>
              </div>
              <div className="pl-3 flex flex-row">{name}
                <button className="ml-1 rounded-full h-4 w-4 flex items-center justify-center border-2 border-gray-800/90">
                  <span className="text-xs font-medium">i</span>
                </button>
              </div>
            </div>
            <div className="px-2 items-center flex flex-row">
              <div className="pr-1">{"<"}</div>
              <div className="w-1 flex items-top h-1 rotate-45 bg-black "></div>
              <span className="px-1 text-xl font-bold">{number}</span>
              <div className="pl-1">{">"}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
const renderPlusSign = () => (
  <div className='text-[30px] text-gray-500 font-serif'>+</div>
);