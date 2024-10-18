import React, { useState } from 'react';
import './App.css'; // Regular CSS file for global styles
import styles from './App.module.css'; // Module CSS file for scoped styles
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      // Clear the display
      setCalVal("");
    } else if (buttonText === "=") {
      // Evaluate the expression
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === ".") {
      // Handle decimal point
      const lastNumberSegment = calVal.split(/[\+\-\*\/]/).pop(); // Get the last number segment
      if (!lastNumberSegment.includes(".")) {
        setCalVal((calVal) => calVal + buttonText); // Append decimal point if not already present
      }
    } else {
      // Append the clicked button's text to the current value
      setCalVal((calVal) => calVal + buttonText);
    }
  };

  return (
    <>
      <div className="outer-div">
        <h1>Calculator App</h1>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonsContainer onButtonClick={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
