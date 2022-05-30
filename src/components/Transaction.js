import React from "react";

function Transaction({ item, handleDelete }) {
  return (
    <div
      className={`inline ${item.amount < 0 ? "red" : "green"}`}
      key={item.id}
    >
      <button onClick={() => handleDelete(item)} className="exit">
        X
      </button>

      <article className="box inline">
        <p>{item.text}</p>
        <p>{item.amount > 0 ? "+" + item.amount : item.amount}</p>
      </article>
    </div>
  );
}

export default Transaction;
