"use client";
import React, { useEffect, useState } from "react";
import Menu from "@/components/atomics/RadialMenu";
import TextCutter from "@/components/molecules/TextCutter";
import PrioList from "@/components/atomics/PrioList";
import Dictionary from "@/components/molecules/Dictionary";
import { IModal } from "@/components/interfaces/Interfaces";
import Calculator from "@/components/atomics/Calculator";
import Navbar from "@/app/navbar";
import Modal from "@/components/atomics/Modal";
import ScrollAnimation from "@/components/atomics/ScrollAnimation";


class ModalCounter {
  static number = 0;
  static incrementModalNumber() {
    this.number += 1;
    return this.number;
  }
}

export default function Home() {
  const [modals, setModals] = useState<IModal[]>([]);
  const [currentModal, setCurrentModal] = useState<number>(0);

  const modalConfigs = [
    { number: 1, name: "Text Cutter", Component: TextCutter, bgColor: "#000000" },
    { number: 2, name: "Prio List", Component: PrioList, bgColor: "#ffffff" },
    { number: 3, name: "Radial Menu", Component: Menu, bgColor: "#ffffff" },
    { number: 4, name: "Calculator", Component: Calculator, bgColor: "#000000" },
    { number: 5, name: "scrollAnimaton", Component: ScrollAnimation, bgColor: "#000000" }

    // Add more modal configurations here
  ];
  useEffect(() => {
    modalConfigs.forEach((modalConfig) => {
      addButton(modalConfig); // Pass the entire modalConfig object
    });
  }, []);

  const addButton = (modalConfig: { number: number; name: string; Component: React.ComponentType; bgColor: string }) => {
    setModals((prevModals) => {
      if (prevModals.some((modal) => modal.name === modalConfig.name)) {
        console.log("Modal already exists");
        return prevModals;
      }
      console.log("Modal added");
      return [...prevModals, modalConfig]; // Use the entire modalConfig object
    });
  };

  const openModal = (pageNumber: number) => {
    setCurrentModal(pageNumber);
  };

  const toggleModal = (modalNumber: number) => {
    if (currentModal === modalNumber) {
        // If the same modal number is passed, close the modal
        setCurrentModal(0); // Assuming 0 indicates no modal is open
    } else {
        // If a different modal number is passed, open that modal
        setCurrentModal(modalNumber);
    }
};

  const isOpen = (number: number) => currentModal === number;

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar color="" pages={modals.length} onClick={() => openModal(0)} />
      <div className="flex h-[calc(100%-55px)] w-full">
        <div className=" w-2/12 h-full">
          <Dictionary activeModal={currentModal} modals={modals} openModal={toggleModal} />
        </div>
        <div className="flex w-10/12 h-auto">
          {modalConfigs.map(({ number, name, Component, bgColor }) => (
            <Modal key={number} number={number} name={name} bgColor={bgColor} isOpen={isOpen(number)} onClose={() => toggleModal(number)}>
              <Component />
            </Modal>
          ))}
        </div>
      </div>
    </div>
  );
}