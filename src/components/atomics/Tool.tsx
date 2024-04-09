import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { Modal } from "./Modal";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    github: boolean;
    link: string;
    img: string;
    language: string[];
    open: boolean;
    children?: ReactNode; 
}

export const Tool = ({ id, title, github, link, img, language, description, children }: ProjectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Modal id={id} isOpen={isOpen} close={toggleModal} children={children} />
            <div
                className="group relative bg-main-25 w-64 h-40 rounded-lg shadow-sm font-Hack"
                onClick={toggleModal}
            >
                <Image
                    height={250}
                    width={150}
                    src={img == null ? "img not found" : img}
                    alt="img not found"
                />
                <span className="absolute top-2 right-2">
                    <div className="inline text-accent-25 text-base ">{id}</div>
                    <div className="inline text-main-10"> / {language}</div>
                </span>
                <div className="opacity-0 bg-main-125 absolute h-10 w-full bottom-0 items-center py-2.5 rounded-b-lg group-hover:opacity-100 duration-200">
                    <span className="grid justify-items-center text-accent-25">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
};
