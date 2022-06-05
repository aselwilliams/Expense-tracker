import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import Form from "./components/Form";

const getHistory = () => {
  let historyList = localStorage.getItem("expense-tracker-history");
  if (historyList) {
    return JSON.parse(localStorage.getItem("expense-tracker-history"));
  } else {
    return [];
  }
};

const getIncome=()=>{
  let incomeAmount=localStorage.getItem('income')
  if(incomeAmount) {
   return JSON.parse(localStorage.getItem('income'))
  }
  return 0
}

const getExpense=()=>{
  let expenseAmount=localStorage.getItem('expense')
  if(expenseAmount) {
    return JSON.parse(localStorage.getItem('expense'))
  }
  return 0
}
function App() {
  const [history, setHistory] = useState(getHistory());
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [income, setIncome] = useState(getIncome());
  const [expense, setExpense] = useState(getExpense());
  const [balance, setBalance] = useState(0);

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
        { id: nanoid(), text: inputText, amount: inputAmount },
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

  useEffect(() => {
    localStorage.setItem("expense-tracker-history", JSON.stringify(history));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [history, income, expense, balance]);

  return (
    <div className="App">
      <Header balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <History history={history} handleDelete={handleDelete} />
      <Form
        inputText={inputText}
        inputAmount={inputAmount}
        setInputText={setInputText}
        setInputAmount={setInputAmount}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
export default App;
