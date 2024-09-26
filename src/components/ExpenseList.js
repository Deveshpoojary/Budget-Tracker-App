import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-3">Expenses List</h3>
      <ul className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{expense.title}</span>
              <span>&#8377;{expense.amount.toFixed(2)}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No expenses added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
