"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { FaBars, FaTimes, FaQuestionCircle, FaUser, FaChalkboardTeacher } from "react-icons/fa";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 lg:p-6 relative">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-300"
          >
            UniLearn
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className={`lg:flex ${isOpen ? "block" : "hidden"} lg:space-x-6`}>
          <div className={`lg:flex ${isOpen ? "hidden" : "flex"} space-x-6`}>
            <Link
              href="/faqs"
              className="hidden lg:flex items-center space-x-2 text-lg font-medium text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              <FaQuestionCircle className="h-5 w-5" />
              <span>FAQs</span>
            </Link>
            <Link
              href="/student-login"
              className="hidden lg:flex items-center space-x-2 text-lg font-medium rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500 transition-colors duration-300"
            >
              <FaUser className="h-5 w-5" />
              <span>Student Login</span>
            </Link>
            <Link
              href="/teacher-login"
              className="hidden lg:flex items-center space-x-2 text-lg font-medium rounded-lg bg-green-600 px-4 py-2 hover:bg-green-500 transition-colors duration-300"
            >
              <FaChalkboardTeacher className="h-5 w-5" />
              <span>Teacher Login</span>
            </Link>
          </div>
        </nav>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/faqs"
            className="flex items-center space-x-2 text-lg font-medium text-white hover:text-gray-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaQuestionCircle className="h-5 w-5" />
            <span>FAQs</span>
          </Link>
          <Link
            href="/student-login"
            className="flex items-center space-x-2 text-lg font-medium text-white hover:text-gray-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaUser className="h-5 w-5" />
            <span>Student Login</span>
          </Link>
          <Link
            href="/teacher-login"
            className="flex items-center space-x-2 text-lg font-medium text-white hover:text-gray-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaChalkboardTeacher className="h-5 w-5" />
            <span>Teacher Login</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
