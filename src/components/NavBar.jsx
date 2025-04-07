import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center px-4">
        {/* Логотип */}
        <div className="text-xl font-bold text-[#009eff]">
          <Link to="/">Algorithmic Learning Lab</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-600">
          <li className="hover:text-[#009eff]">
            <Link to="/">Главная</Link>
          </li>
          <li className="hover:text-[#009eff]">
            <Link to="materials">Материалы</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 py-4 text-gray-600">
            <li
              className="px-6 hover:text-[#009eff] font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/">Главная</Link>
            </li>
            <li
              className="px-6 hover:text-[#009eff] font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="materials">Материалы</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}