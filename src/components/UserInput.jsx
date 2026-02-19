export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            min={1}
            value={userInput.duration}
            onChange={(event) =>
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
