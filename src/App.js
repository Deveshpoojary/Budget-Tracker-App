import React, { useState, useEffect } from 'react';
import Budget from './components/BudgetInput';
import Expenses from './components/ExpenseInput';
import Summary from './components/Summary';
import ExpensesList from './components/ExpenseList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [budget, setBudget] = useState(() => JSON.parse(localStorage.getItem('budget')) || 0);
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);
  const [totalExpense, setTotalExpense] = useState(() => JSON.parse(localStorage.getItem('totalExpense')) || 0);
  const [balance, setBalance] = useState(() => JSON.parse(localStorage.getItem('balance')) || budget - totalExpense);

  // Update theme based on darkMode state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Save budget, expenses, totalExpense, and balance to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('totalExpense', JSON.stringify(totalExpense));
    localStorage.setItem('balance', JSON.stringify(balance));
  }, [budget, expenses, totalExpense, balance]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSetBudget = (newBudget) => {
    setBudget(newBudget);
    setBalance(newBudget - totalExpense);
  };

  const handleAddExpense = (title, amount) => {
    const newExpense = { title, amount: parseFloat(amount) };
    const newExpenses = [...expenses, newExpense];
    const newTotal = newExpenses.reduce((total, expense) => total + expense.amount, 0);
    setExpenses(newExpenses);
    setTotalExpense(newTotal);
    setBalance(budget - newTotal);
  };

  // Clear all data and localStorage
  const handleClearAll = () => {
    setBudget(0);
    setExpenses([]);
    setTotalExpense(0);
    setBalance(0);
    localStorage.removeItem('budget');
    localStorage.removeItem('expenses');
    localStorage.removeItem('totalExpense');
    localStorage.removeItem('balance');
    localStorage.removeItem('theme');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <div className="max-w-3xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Budget budget={budget} setBudget={handleSetBudget} darkMode={darkMode} />
          <Expenses addExpense={handleAddExpense} darkMode={darkMode} />
        </div>
        <Summary budget={budget} totalExpense={totalExpense} balance={balance} darkMode={darkMode} />
        <ExpensesList expenses={expenses} />

        {/* Clear All Button */}
        <button
          onClick={handleClearAll}
          className="mt-6 w-full bg-red-600 p-3 rounded-lg text-white font-bold"
        >
          Clear All
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
