import { calculateInvestmentResults, formatter } from "../util/investment";

const TABLE_ROWS = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Results({ userInput }) {
  console.log(userInput);

  const annualData = calculateInvestmentResults(userInput);
  const initalValue =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  console.log(annualData);

  return (
    <table id="result">
      <thead>
        <tr>
          {TABLE_ROWS.map((row) => (
            <th key={row}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {annualData.map((year) => {
          const totalInterest =
            year.valueEndOfYear -
            year.annualInvestment * year.year -
            initalValue;
          const totalAmountInvested = year.valueEndOfYear - totalInterest;
          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{formatter.format(year.valueEndOfYear)}</td>
              <td>{formatter.format(year.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
