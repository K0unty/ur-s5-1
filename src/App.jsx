// Import Setion
import { useState } from "react";
import Header from "./comp/Header.jsx";
import UserInput from "./comp/UserInput.jsx";
import Results from "./comp/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 4200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // one function that can be connected to all inputs
  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>😡BASTARD NO NEGATIVE DURATION, FUK FUK 😡</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
