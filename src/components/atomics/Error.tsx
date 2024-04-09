import React, { useEffect, useState } from "react";

interface ErrorNotificationProps {
  errorMsg: string;
  setErrorMsg: (errorMsg: string) => void;
  top?: number;
  seconds?: number;
  onCounterEnd: () => void;
  msgCounter: number; // Add this line
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  errorMsg,
  setErrorMsg,
  top = 14,
  seconds = 5,
  onCounterEnd,
  msgCounter, // Add this line
}) => {
  const [counter, setCounter] = useState(seconds);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (errorMsg.trim() !== "") {
      setSlideIn(true);
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [errorMsg]);

  useEffect(() => {
    let timeoutId;
    if (counter === 0) {
      setSlideIn(false);
      timeoutId = setTimeout(() => {
        setErrorMsg("");
        onCounterEnd();
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [counter, setErrorMsg, onCounterEnd]);

  return (
    <div
      style={{ top: `${top}px`, right: "0px", position: "fixed" }}
      className={`text-accent-50 bg-main-100 flex items-center justify-center p-4  
    ${slideIn ? "animate-slideIn" : "animate-slideOut"}`}
    >
      {errorMsg.trim() + " " + counter + " " + msgCounter}
    </div>
  );
};
