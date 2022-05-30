import React from "react";

function Form({
  handleFormSubmit,
  setInputAmount,
  setInputText,
  inputAmount,
  inputText,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <h4>Add new transaction</h4>
      <div className="underline"></div>
      <p>Text</p>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        placeholder="Enter text..."
      />
      <p>
        Amount<p>(negative - expense, positive - income)</p>
      </p>
      <input
        type="number"
        onChange={(e) => setInputAmount(e.target.value)}
        value={inputAmount}
        placeholder="Enter amount..."
      />

      <button>Add transaction</button>
    </form>
  );
}

export default Form;
