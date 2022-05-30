import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// const getLocalStorage = () => {
//   let historyList = window.localStorage.getItem("expense-tracker-history");
//   if (historyList) {
//     return JSON.parse(window.localStorage.getItem("expense-tracker-history"));
//   } else {
//     return [];
//   }
// };

function App() {
  const [history, setHistory] = useState([]);
  const [transaction, setTransaction] = useState({});
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    setBalance(Number(income) + Number(expense));
  }, [income, expense]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputText || !inputAmount) {
      alert("Please add a text and amount");
    } else {
      if (inputAmount >= 0) {
        setIncome(Number(income) + Number(inputAmount));
      } else {
        setExpense(Number(expense) + Number(inputAmount));
      }

      let newList = [
        ...history,
        { id: nanoid(), text: inputText, amount: inputAmount }
      ];
      setHistory(newList);
      setInputText("");
      setInputAmount("");
    }
  };

  const handleDelete = (item) => {
    let newList = history.filter((el) => el.id !== item.id);
    setHistory(newList);
    if (item.amount >= 0) {
      setIncome(Number(income) - Number(item.amount));
    } else {
      setExpense(Number(expense) - Number(item.amount));
    }
  };

  // useEffect(() => {
  //   window.localStorage.setItem("expense-tracker-history", JSON.stingify(history));
  // }, [history]);

  return (
    <div className="App">
      <header>
        <h2>Expense Tracker</h2>
        <label>YOUR BALANCE</label>
        <p className="balance">${balance.toFixed(2)}</p>
      </header>
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

      <section>
        <h4>History</h4>
        <div className="underline"></div>
        {history.map((item) => (
          <div className={`inline ${item.amount < 0 ? "red" : "green"}`}>
            <button onClick={() => handleDelete(item)} className="exit">
              X
            </button>

            <article key={item.id} className="box inline">
              <p>{item.text}</p>
              <p>{item.amount > 0 ? "+" + item.amount : item.amount}</p>
            </article>
          </div>
        ))}
      </section>

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
          onChange={handleAmountChange}
          value={inputAmount}
          placeholder="Enter amount..."
        />

        <button>Add transaction</button>
      </form>
    </div>
  );
}
export default App