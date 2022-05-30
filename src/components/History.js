import React from 'react'

function History({history, handleDelete}) {
  return (
    <section>
        <h4>History</h4>
        <div className="underline"></div>
        {history.map((item) => (
          <div className={`inline ${item.amount < 0 ? "red" : "green"}`} key={item.id}>
            <button onClick={() => handleDelete(item)} className="exit">
              X
            </button>

            <article  className="box inline">
              <p>{item.text}</p>
              <p>{item.amount > 0 ? "+" + item.amount : item.amount}</p>
            </article>
          </div>
        ))}
      </section>
  )
}

export default History