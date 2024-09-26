import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border border-t-2 border-gray-200 dark:bg-gray-900 dark:border-t-2 dark:border-gray-800 p-4 text-center mt-8">
      <p className="text-gray-600 dark:text-gray-300">
        &copy; {currentYear} Devesh G Poojary. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
