import { calculateInvestmentResults, formatter } from "../util/investment";

// Component for the table with results

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>PantyInvestment</th>
          <th>PantyIntrest (Year)</th>
          <th>InverstedPussy</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
