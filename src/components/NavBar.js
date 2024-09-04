import React from 'react';

export default function NavBar() {
  return (
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-xl font-bold text-purple-900">uiAid</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a className="text-gray-600 hover:text-gray-900" href="#">
            About
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="#">
            Work
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="#">
            Research
          </a>
        </nav>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
          Login
        </button>
      </header>

  );
}
