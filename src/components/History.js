import React from "react";
import Transaction from "./Transaction";

function History({ history, handleDelete }) {
  return (
    <section>
      <h4>History</h4>
      <div className="underline"></div>
      {history.map((item) => (
        <Transaction item={item} handleDelete={handleDelete} />
      ))}
    </section>
  );
}

export default History;
