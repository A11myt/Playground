"use client";
import React, { useEffect, useState } from "react";
import Menu from "@/components/atomics/RadialMenu";
import TextCutter from "@/components/molecules/TextCutter";
import PrioList from "@/components/atomics/PrioList";
import Dictionary from "@/components/molecules/Dictionary";
import { IModal } from "@/components/interfaces/Interfaces";
import Calculator from "@/components/atomics/Calculator";
import Navbar from "@/app/navbar";
import Modal from "./Modal";
import ScrollAnimation from "@/components/atomics/ScrollAnimation";
import Colors from "@/components/atomics/Colors";


export default function Home() {
  const [modals, setModals] = useState<IModal[]>([]);
  const [currentModal, setCurrentModal] = useState<number>(0);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const modalConfigs = [
    { number: 1, name: "Text Cutter", Component: TextCutter, bgColor: "#000000", modalDate: { year: "2024", month: "7th", day: "May" } },
    { number: 2, name: "Prio List", Component: PrioList, bgColor: "#ffffff", modalDate: { year: "2024", month: "7th", day: "May" } },
    { number: 3, name: "Radial Menu", Component: Menu, bgColor: "#f66000", modalDate: { year: "2024", month: "7th", day: "May" } },
    { number: 4, name: "Calculator", Component: Calculator, bgColor: "#ffffff", modalDate: { year: "2024", month: "7th", day: "May" } },
    { number: 5, name: "scrollAnimaton", Component: ScrollAnimation, bgColor: "#ffffff", modalDate: { year: "2024", month: "20th", day: "June" } },
    { number: 6, name: "Colors", Component: Colors, bgColor: "#ffffff", modalDate: { year: "2024", month: "21th", day: "June" } }

  ];

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);


  useEffect(() => {
    modalConfigs.forEach((modalConfig) => {
      addButton(modalConfig);
    });
  }, []);

  const addButton = (modalConfig: { number: number; name: string; Component: React.ComponentType; bgColor: string }) => {
    setModals((prevModals) => {
      if (prevModals.some((modal) => modal.name === modalConfig.name)) {
        console.log("Modal already exists");
        return prevModals;
      }
      console.log("Modal added");
      return [...prevModals, modalConfig];
    });
  };

  const openModal = (pageNumber: number) => {
    setCurrentModal(pageNumber);
  };

  const toggleModal = (modalNumber: number) => {
    if (currentModal === modalNumber) {
      setCurrentModal(0);
    } else {
      setCurrentModal(modalNumber);
    }
  };
  const isOpen = (number: number) => currentModal === number;

  return (
    <div className={`flex flex-col w-full h-full ${isDarkMode ? 'dark' : ''}`}>
      <div
        style={
          isDarkMode ? {
            background: "linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(162,166,156,1) 0%, rgba(184,191,176,1) 10%, rgba(255,255,255,1) 45%, rgba(255,253,250,1) 75%, rgba(228,193,140,1) 90%, rgba(246,154,60,1) 100%)"
          } : { background: "linear-gradient(145deg, rgba(192, 200, 216,1) 0%, rgba(25, 29, 36,1) 25%, rgba(34, 38, 48,1) 75%, rgba(255, 165, 0,1) 100%)" }
        }
        className="w-full h-full overflow-hidden">
        <Navbar color="" pages={modals.length} onClick={() => openModal(0)} toggleDarkMode={toggleDarkMode} />
        <div className="flex h-[calc(100%-55px)] w-full">
          <div className=" w-2/12 h-full">
            <Dictionary activeModal={currentModal} modals={modals} openModal={toggleModal} />
          </div>
          <div className="flex w-10/12 h-auto ">
            {modalConfigs.map(({ number, name, Component, bgColor, modalDate }) => (
              <Modal key={number} number={number} name={name} bgColor={bgColor} isOpen={isOpen(number)} onClose={() => toggleModal(number)} date={modalDate}>
                <Component />
              </Modal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}