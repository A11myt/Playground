import React, { Children, useState, ReactNode } from "react";
import projectDefault from "./../../../public/images/projectDefault.png";
import menu from "../../assets/icons/menu.svg";
import { Button } from "./Button";
import Image from "next/image";

interface Modal {
    id: number;
    isOpen: boolean;
    close?: () => void;
    children?: ReactNode;
}

export const Modal = ({ id, isOpen, close, children }: Modal) => {
    return (
        <div>
            <div
                className={`${isOpen ? "visible" : "hidden"} fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-200`}>
                <div className="bg-main-50 w-3/4 h-3/4">
                    <div className="flex justify-end">
                        <button onClick={close} className=" mt-2 mr-2 text-accent-25">
                            X
                        </button></div>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}