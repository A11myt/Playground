import React, { useState } from "react";
import projectDefault from "./../../../public/images/projectDefault.png";
import Image from "next/image";
import { Modal } from "./Modal";

interface ProjectProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  github: boolean;
  link: string;
  img: string;
  language: string[];
  open: boolean;
}

export const Project = ({ id, title, subtitle, github, link, img, language, description, }: ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Modal id={id} isOpen={isOpen} close={toggleModal}  >
        <ProjectContent id={id} isOpen={isOpen} close={toggleModal} content={[title, subtitle, description]} language={language} img={img} />
      </Modal>
      <div
        className="group relative bg-main-25 w-64 h-40 rounded-lg shadow-sm font-Hack"
        onClick={toggleModal}
      >
        <Image
          height={100}
          width={100}
          src={img == null ? projectDefault : img}
          alt="img not found"
        />
        <span className="absolute top-2 right-2">
          <div className="inline text-accent-25 text-base ">{id}</div>
          <div className="inline text-main-10  "> / {language}</div>
        </span>
        <div className="opacity-0 bg-main-125 absolute h-10 w-full bottom-0 items-center py-2.5 rounded-b-lg group-hover:opacity-100 duration-200">
          <span className="grid justify-items-center text-accent-25">
            {title}
          </span>
        </div>
      </div>
    </div >
  );
};

interface ModalProps {
  isOpen: boolean;
  id: number;
  img: string;
  close?: () => void;
  content?: string[];
  language?: string[];
}

export const ProjectContent = ({ id, isOpen, close, content, language, img }: ModalProps) => {
  return (
    <div>
      <div
        className={`${isOpen ? "visible" : "hidden"} fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-200`}>
        <div className="bg-main-50 w-3/4 h-3/4 grid grid-cols-2">

          <div className="relative h-full">
            <Image
              layout="fill"
              objectFit="cover"
              src={img == null ? projectDefault : img}
              alt={`img ${img} not found`}
            />
          </div>
          <div className="relative grid grid-flow-row h-full p-4 space-y-2">
            <button onClick={close} className="absolute top-2 right-2">
              X
            </button>
            <h1 className="text-2xl font-bold">
              {id} / {content && content[0]}
            </h1>
            <span className="text-lg">
              [
              {language?.map((l, index) => (
                <span key={index}>
                  {l}
                  {index !== language.length - 1 && ", "}
                </span>
              ))}
              ]
            </span>
            <p className="text-base">{content && content[1]}</p>
            <p className="text-base">{content && content[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
