import React from "react";

function Header({ balance }) {
  return (
    <header>
      <h2>Expense Tracker</h2>
      <label>YOUR BALANCE</label>
      <p className="balance">${balance.toFixed(2)}</p>
    </header>
  );
}

export default Header;
