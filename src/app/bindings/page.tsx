"use client";
import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "@/components/molecules/Navigation";
import { Footer } from "@/components/molecules/Footer";
import socials from "./../../../public/socials.json";
import { ErrorNotification } from "@/components/atomics/Error";
import { Bindings } from "@/components/molecules/Bindings";

interface ErrorNotification {
  errorMsg: string;
  counter: number;
  msgCounter: number;
}

export default function Home() {
  const [errorNotifications, setErrorNotifications] = useState<
    ErrorNotification[]
  >([]);
  const [msgCounter, setMsgCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main>
      {/* Navigation BG Color custimizable */}
      <Navigation
        title="Jason Johnson"
        mail="Jason.J@gmx.de"
        socials={socials}
        toggleDarkMode={toggleDarkMode}
        bgColor="bg-dark-10"
        sectionRefs={[]}
      />
      <Bindings bgColor="bg-light-10 dark:bg-dark-10" />
      <Footer bgColor="bg-light-10 dark:bg-dark-10" />
    </main>
  );
}
