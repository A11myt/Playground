"use client";
import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "@/components/molecules/Navigation";
import { Hero } from "@/components/molecules/Hero";
import { Footer } from "@/components/molecules/Footer";
import { About } from "@/components/molecules/About";
import { Projects } from "@/components/molecules/Projects";
import myData from "./../../../public/projects.json";
import socials from "./../../../public/socials.json";
import { Stepper } from "@/components/molecules/Stepper";
import { ErrorNotification } from "@/components/atomics/Error";
import { Tool } from "@/components/atomics/Tool";
import PizzaCalc from "@/tools/PizzaCalc";
import { Tools } from "@/components/molecules/Tools";

interface ErrorNotification {
  errorMsg: string;
  counter: number;
  msgCounter: number;
}

export default function Portfolio() {

  const [errorNotifications, setErrorNotifications] = useState<
    ErrorNotification[]
  >([]);
  const [msgCounter, setMsgCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const sectionRefs = [
    { name: 'Header', ref: useRef(null) },
    { name: 'Home', ref: useRef(null) },
    { name: 'Hero', ref: useRef(null) },
    { name: 'Projects', ref: useRef(null) },
{ name: 'Footer', ref: useRef(null) },
    // { name: 'Contact', ref: useRef(null) },
  ];
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      {/* Navigation BG Color custimizable */}
      <div ref={sectionRefs[0].ref} className="snap-start">
        <Navigation
          title="Jason Johnson"
          mail="Jason.J@gmx.de"
          socials={socials}
          toggleDarkMode={toggleDarkMode}
          bgColor="bg-dark-10"
          sectionRefs={sectionRefs}
        />
      </div>
      <div ref={sectionRefs[1].ref} className="snap-start">
        <Hero
          title="Hi! Ich bin Jason."
          content="Herzlich willkommen in meinem Portfolio! Hier gewähre ich Einblicke in meine kreativen Arbeiten und technischen Projekte. Getrieben von meiner Leidenschaft für Design und Programmierung strebe ich kontinuierlich nach Innovation und Ästhetik."
          bgColor="bg-light-10 dark:bg-dark-10"
        />
      </div>

      <div ref={sectionRefs[2].ref} className="snap-start">
        <Stepper bgColor="bg-light-10 dark:bg-dark-25" startPosition={1} >
          <div> Contact </div>
          <Projects bgColor="bg-light-10 dark:bg-dark-25" projects={myData.project} />
          <About
            bgColor="bg-light-10 dark:bg-dark-10"
            firstColor="bg-light-10 dark:bg-dark-10"
            secondColor="bg-light-25 dark:bg-dark-25"
            content="In der Welt der Webentwicklung bin ich ein kreativer Denker, stets auf der Suche nach cleveren Lösungen und neuen Herausforderungen. Mein Portfolio ist mehr als nur eine Ansammlung von Projekten; es spiegelt meine Begeisterung für moderne Technologien und schickes Design wider. Begleiten Sie mich auf dieser Reise durch Innovation und Ästhetik!"
            skills={["test", "test2s", "test3"]}
          />
          <Tools bgColor="bg-light-10 dark:bg-dark-25"  >


            <Tool
              id={1}
              title="pizzaCalc"
              description="Description of the project"
              github={false}
              link="https://example.com"
              img="https://placehold.co/250x150"
              language={["TypeScript"]}
              open={true}
              children={PizzaCalc()}
            />
          </Tools>
        </Stepper>
      </div >
      <div  ref={sectionRefs[4].ref} className="snap-start">
        <Footer bgColor="bg-light-10 dark:bg-dark-10" />
      </div>
    </main>
  );
}
