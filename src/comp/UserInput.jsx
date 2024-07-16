import { useState } from "react";

export default function UserInput() {
  // Managing the all the user inputs into one object

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
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial PantyStinkSCore</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label> Annual PantyBudget</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expected Panties</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label> Duration of StinkSmell</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
