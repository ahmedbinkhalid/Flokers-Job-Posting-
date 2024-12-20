import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Flokers</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Home
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              About
            </Link>
            <Link to="/jobs" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/jobs') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Jobs
            </Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Contact
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Login
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={toggleDrawer} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
          }`}
        >
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" onClick={toggleDrawer} className={`nav-link ${isActive('/') ? 'text-blue-600' : ''}`}>
              Home
            </Link>
            <Link to="/about" onClick={toggleDrawer} className={`nav-link ${isActive('/about') ? 'text-blue-600' : ''}`}>
              About
            </Link>
            <Link to="/jobs" onClick={toggleDrawer} className={`nav-link ${isActive('/jobs') ? 'text-blue-600' : ''}`}>
              Jobs
            </Link>
            <Link to="/contact" onClick={toggleDrawer} className={`nav-link ${isActive('/contact') ? 'text-blue-600' : ''}`}>
              Contact
            </Link>
            <Link to="/login" onClick={toggleDrawer} className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
