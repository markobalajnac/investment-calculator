const TABLE_ROWS = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Results() {
  return (
    <table id="result">
      <thead>
        <tr>
          {TABLE_ROWS.map((row) => (
            <th>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
}
