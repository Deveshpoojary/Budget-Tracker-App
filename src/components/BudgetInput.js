import React, { useState } from 'react';

const BudgetInput = ({ budget, setBudget, darkMode }) => {
  const [inputBudget, setInputBudget] = useState('');

  const handleSetBudget = () => {
    if (inputBudget) {
      setBudget(parseFloat(inputBudget));
      setInputBudget(''); // Clear input field after setting the budget
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Budget</h3>
      <input
        type="number"
        placeholder="Enter Total Amount"
        className="w-full p-2 mb-2 bg-white dark:bg-gray-700 rounded-lg"
        value={inputBudget}
        onChange={(e) => setInputBudget(e.target.value)}
      />
      <button
        onClick={handleSetBudget}
        className={`w-full p-2 rounded-lg text-white ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}
      >
        Set Budget
      </button>
    </div>
  );
};

export default BudgetInput;
