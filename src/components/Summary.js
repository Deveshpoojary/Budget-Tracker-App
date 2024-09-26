import React from 'react';

const Summary = ({ budget, totalExpense, balance, darkMode }) => {
  return (
    <div
      className={`p-4 mt-6 rounded-lg shadow-md text-lg font-semibold ${
        darkMode ? 'bg-blue-600' : 'bg-blue-400'
      }`}
    >
      {/* On small screens, display in rows with amount in front. On larger screens, display amount underneath the label */}
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3 md:text-left">
        
        {/* Total Budget */}
        <div className="text-center flex justify-between md:block">
          <div>Total Budget</div>
          <div className="font-bold md:mt-1">&#8377;{budget.toFixed(2)}</div>
        </div>

        {/* Expenses */}
        <div className="text-center flex justify-between md:block">
          <div>Expenses</div>
          <div className="font-bold md:mt-1">&#8377;{totalExpense.toFixed(2)}</div>
        </div>

        {/* Balance */}
        <div className="text-center flex justify-between md:block">
          <div>Balance</div>
          <div className="font-bold md:mt-1">&#8377;{balance.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
