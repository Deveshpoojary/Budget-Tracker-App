import React, { useState } from 'react';

const ExpenseInput = ({ addExpense, darkMode }) => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseTitle && expenseAmount) {
      addExpense(expenseTitle, expenseAmount);
      setExpenseTitle('');
      setExpenseAmount('');
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Expenses</h3>
      <input
        type="text"
        placeholder="Enter Title of Product"
        className="w-full p-2 mb-2 bg-white dark:bg-gray-700 rounded-lg"
        value={expenseTitle}
        onChange={(e) => setExpenseTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Cost of Product"
        className="w-full p-2 mb-2 bg-white dark:bg-gray-700 rounded-lg"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <button
        onClick={handleAddExpense}
        className={`w-full p-2 rounded-lg text-white ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}
      >
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseInput;
