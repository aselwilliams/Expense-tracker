import React from 'react'

function IncomeExpense({income, expense}) {
  return (
    <section className="flex">
    <div>
      <label>INCOME</label>
      <p className="income">${income.toFixed(2)}</p>
    </div>
    <div className="line"></div>
    <div>
      <label>EXPENSE</label>
      <p className="expense">${Math.abs(expense).toFixed(2)}</p>
    </div>
  </section>
  )
}

export default IncomeExpense