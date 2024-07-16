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
      <Results input={userInput} />
    </>
  );
}

export default App;
