import { useState } from "react";
import sty from "./Calculator.module.css";
import Button from "./calculator_component";

const Calculator = () => {
  // this array of the buttons of the calculator
  let buttonNames = [
    "C",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  // this state hook will manage data on display
  let [displayValue, setDisplayValue] = useState("");

  // this function will handle button click events
  const handleOnClick = (events, cur) => {
    if (cur === "C") {
      setDisplayValue("");
    } else if (cur === "DEL") {
      let value = displayValue;
      value = value.substring(0,value.length-1);
      setDisplayValue(value);
  
    } else if (cur === "=") {
      let result = eval(displayValue);
      setDisplayValue(result);
    } else {
      let value = displayValue + cur;
      setDisplayValue(value);
    }
  };

  return (
    <>
      <div className={sty.parent}>
        <main className={sty.main}>
          <div className={sty.calc}>
            <input
              type="text"
              id={sty.display}
              disabled
              readOnly
              value={displayValue}
            />
            <div className={sty.button_grid}>
              {buttonNames.map((cur) => (
                <Button
                  key={cur}
                  value={cur}
                  handleClick={(events) => handleOnClick(events, cur)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Calculator;
