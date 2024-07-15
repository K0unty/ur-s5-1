// Fetching the user input

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial PantyStinkSCore</label>
          <input type="number" required />
        </p>
        <p>
          <label> Annual PantyBudget</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expected Panties</label>
          <input type="number" required />
        </p>
        <p>
          <label> Duration of StinkSmell</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
