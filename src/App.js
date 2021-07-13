import FieldItem from "./components/tictactoefield";
import styles from "./app.module.css";
import { useState, useEffect } from "react";
import Counter from "./components/counter";

function App() {
  const localXCount = JSON.parse(localStorage.getItem("XCounter")) || 0;
  const localYCount = JSON.parse(localStorage.getItem("YCounter")) || 0;

  const [stateArray, setStateArray] = useState(
    Array.from({ length: 9 }, (x, i) => "empty")
  );
  const [fieldArray, setFieldArray] = useState(
    Array.from({ length: 9 }, (x, i) => i)
  );
  const [running, setRunning] = useState(true);
  const [isTie, setIsTie] = useState(false);
  const [current, setCurrent] = useState("X");
  const [XCounter, setXCounter] = useState(localXCount);
  const [YCounter, setYCounter] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("XCounter", XCounter);
    window.localStorage.setItem("YCounter", YCounter);
  }, [XCounter, YCounter]);

  useEffect(() => {
    if (
      (fieldArray[0] === fieldArray[1] && fieldArray[0] === fieldArray[2]) ||
      (fieldArray[3] === fieldArray[4] && fieldArray[3] === fieldArray[5]) ||
      (fieldArray[6] === fieldArray[7] && fieldArray[6] === fieldArray[8]) ||
      (fieldArray[0] === fieldArray[3] && fieldArray[0] === fieldArray[6]) ||
      (fieldArray[1] === fieldArray[4] && fieldArray[1] === fieldArray[7]) ||
      (fieldArray[2] === fieldArray[5] && fieldArray[2] === fieldArray[8]) ||
      (fieldArray[0] === fieldArray[4] && fieldArray[0] === fieldArray[8]) ||
      (fieldArray[2] === fieldArray[4] && fieldArray[2] === fieldArray[6])
    ) {
      incrementCounter(current);
      setRunning(false);
    } else if (!stateArray.includes("empty")) {
      setRunning(false);
      setIsTie(true);
    }
  }, [fieldArray, stateArray]);

  const updateFieldArray = (index, value) => {
    let newArr = [...fieldArray];
    newArr[index] = value;
    setFieldArray(newArr);
  };

  const updateStateArray = (index, value) => {
    let newArr = [...stateArray];
    newArr[index] = value;
    setStateArray(newArr);
  };

  const resetGame = () => {
    setStateArray(Array.from({ length: 9 }, (X, i) => "empty"));
    setFieldArray(Array.from({ length: 9 }, (X, i) => i));
    setRunning(true);
    setIsTie(false);
  };

  const resetCounter = () => {
    setXCounter(0);
    setYCounter(0);
  };

  const onClick = (id) => {
    if (running) {
      if (typeof fieldArray[id] === "number") {
        updateFieldArray(id, current);
      }
      if (stateArray[id] === "empty") updateStateArray(id, current);
      setCurrent((prev) => {
        if (prev === "X") {
          return "O";
        } else {
          return "X";
        }
      });
    }
  };

  const incrementCounter = (current) => {
    if (current === "X") {
      setYCounter((prev) => prev + 1);
    } else {
      setXCounter((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className={styles.box}>
        <Counter
          XCounter={XCounter}
          resetCounter={resetCounter}
          YCounter={YCounter}
        ></Counter>

        <h1 className={styles.heading}>TIC TAC TOE</h1>
        <div className={styles.container}>
          {stateArray.map((item, index) => (
            <FieldItem
              key={index}
              id={index}
              state={item}
              onClick={onClick}
              running={running}
            ></FieldItem>
          ))}
        </div>
        {!running && (
          <div className={styles.popup}>
            {isTie ? <p>TIE</p> : <p>{current === "X" ? "O" : "X"} HAS WON </p>}
            <button onClick={resetGame}>PLAY AGAIN</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
