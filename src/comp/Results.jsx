import { calculateInvestmentResults } from "../util/investment";

// Component for the table with results

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  return <p>Pasnties....</p>;
}
