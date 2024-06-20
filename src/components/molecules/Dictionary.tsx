import { useState } from "react";
export default function Dictionary({
    modals,
    openModal,
    activeModal,
}: {
    modals: { number: number; name: string }[];
    openModal: (number: number) => void;
    activeModal: number;
}) {

    return (
        <div className="h-full flex-none flex items-center flex-col">
            <div className="w-full h-full grid  bg-white/20 backdrop-blur-md">
                <div className="p-4 flex flex-col gap-2 backdrop-blur-lg border-r border-gray-300 ">
                    {modals.map((modal, index) => (
                        <button className={`w-full justify-start flex font-inter transition-all duration-200 ease-in-out ${activeModal == modal.number && "group shadow-lg pl-2"} hover:pl-2`} onClick={() => openModal(modal.number)}>
                            <span style={{ transform: "skewX(-15deg)" }} className="bg-black mr-[-10px] rounded-t font-bold rounded-bl px-2  border-b-2 border-black text-gray-100"> {modal.number} </span>
                            <span className="w-full flex justify-start px-4 border-b-2 font-regular hover:bg-gray-100/50 rounded-tr-lg text-gray-800  border-black"> {modal.name} </span>
                        </button>
                    ))}
                </div>
            </div>
        </div >
    );
}