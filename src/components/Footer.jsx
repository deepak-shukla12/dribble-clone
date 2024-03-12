import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p className="text-sm">
        © {(new Date().getFullYear())} All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-gray-400">Terms of Use</a>
        <span>|</span>
        <a href="#" className="hover:text-gray-400">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
