import React, { useState, useEffect } from "react";

export default function Calculator() {

  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [currentValue, setCurrentValue] = useState("0");

  const onOperatorClick = (operator: string) => {
    setCurrentValue(displayValue);
    setOperator(operator);
    setDisplayValue("");
  }

  const onNumberClick = (value: string) => {
    if (value === "." && displayValue.includes(".")) {
      return;
    }
    setDisplayValue(prevValue => prevValue === "0" ? value : prevValue + value);
  }

  const calculate = () => {
    const firstNumber = parseFloat(currentValue);
    const secondNumber = parseFloat(displayValue);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error("Invalid number format");
    }
    const operation = operatorFunctions[operator];
    if (!operation) {
      throw new Error(`Unsupported operator ${operator}`);
    }
    return operation(firstNumber, secondNumber);
  }

  const operatorFunctions: { [key: string]: (a: number, b: number) => number } = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => {
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
    }
  };

  const onEqualsClick = () => {
    try {
      const result = calculate();
      setDisplayValue(result.toString());
      setCurrentValue("0");
      setOperator("");
    } catch (error) {
      setDisplayValue("Error");
      setCurrentValue("0");
      setOperator("");
    }
  }

  const onClearClick = () => {
    setDisplayValue("0");
    setCurrentValue("0");
    setOperator("");
  }
  const onDelClick = () => {
    let newValue = displayValue.slice(0, -1);
    setDisplayValue(newValue === "" ? "0" : newValue);
  }
  const onPercentageClick = () => {
    setDisplayValue((Number(displayValue) / 100 * Number(currentValue)).toString());
  }

  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <div className="flex items-center justify-center shadow-lg w-1/5 h-auto p-4 flex-col rounded-md bg-white">

        <input className="text-end w-full h-10 bg-gray-200 m-2 px-2 rounded-md font-bold" disabled type="text" value={displayValue} />
        <div className="grid grid-cols-4 gap-2 w-full">
          <CalculatorButton label="C" onClick={onClearClick} />
          <CalculatorButton label="DEL" onClick={onDelClick} />
          <CalculatorButton label="%" onClick={onPercentageClick} />
          <OperatorButton value="/" onClick={() => onOperatorClick("/")} />
          <NumberButton value="7" onClick={() => onNumberClick("7")} />
          <NumberButton value="8" onClick={() => onNumberClick("8")} />
          <NumberButton value="9" onClick={() => onNumberClick("9")} />
          <OperatorButton value="*" onClick={() => onOperatorClick("*")} />
          <NumberButton value="4" onClick={() => onNumberClick("4")} />
          <NumberButton value="5" onClick={() => onNumberClick("5")} />
          <NumberButton value="6" onClick={() => onNumberClick("6")} />
          <OperatorButton value="-" onClick={() => onOperatorClick("-")} />
          <NumberButton value="1" onClick={() => onNumberClick("1")} />
          <NumberButton value="2" onClick={() => onNumberClick("2")} />
          <NumberButton value="3" onClick={() => onNumberClick("3")} />
          <OperatorButton value="+" onClick={() => onOperatorClick("+")} />
          <NumberButton value="0" tailwind='col-span-2' onClick={() => onNumberClick("0")} />
          <NumberButton value="." onClick={() => onNumberClick(".")} />
          <OperatorButton value="=" onClick={() => onEqualsClick()} />
        </div>
        
      </div>
    </div>
  )
}

function NumberButton(props: { value: string, tailwind?: string, onClick: () => void }) {
  return (
    <button className={`font-bold bg-gray-200 hover:bg-gray-300 rounded-md ${props.tailwind}`} onClick={props.onClick}>{props.value}</button>
  )
}

function OperatorButton(props: { value: string, onClick: () => void }) {
  return (
    <button className="font-bold bg-orange-500 hover:bg-orange-600 rounded-md py-1 text-white" onClick={props.onClick}>{props.value}</button>
  )
}
function CalculatorButton(props: { label: string, onClick: () => void, extraClasses?: string }) {
  return (
    <button className={`font-bold rounded-md py-1 bg-gray-200 hover:bg-gray-300`} onClick={props.onClick}>
      {props.label}
    </button>
  )
}