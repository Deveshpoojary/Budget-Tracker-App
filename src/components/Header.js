import React from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function Header({ toggleTheme, darkMode }) {
  return (
    <div className="flex justify-center items-center mb-6">
      <h1 className="text-3xl font-bold">Budget App</h1>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white mt-2 ml-2 p-2 rounded-lg flex items-center justify-center"
      >
        {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
      </button>
    </div>
  );
}

export default Header;
