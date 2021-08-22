import React, { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id: 1, title: 'Car Insurance', amount: 449.99, date: new Date(2021, 5, 12)},
  {id: 2, title: 'Toile Paper', amount: 99.99, date: new Date(2021, 2, 22)},
  {id: 3, title: 'Wooden Desk', amount: 129.99, date: new Date(2021, 6, 26)},
  {id: 4, title: 'New TV', amount: 699.99, date: new Date(2021, 2, 22)}
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    // console.log('In App.js');
    // console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
