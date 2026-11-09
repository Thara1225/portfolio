'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full backdrop-blur-sm shadow-lg z-50 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-900/95' 
        : 'bg-white/95'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className={`text-xl font-bold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Tharasari Rajapaksha
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className={`transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-700 hover:text-slate-900'
            }`}>
              About
            </Link>
            <Link href="#skills" className={`transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-700 hover:text-slate-900'
            }`}>
              Skills
            </Link>
            <Link href="#projects" className={`transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-700 hover:text-slate-900'
            }`}>
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Contact Me
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-slate-700'
              }`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.828 9.193a1 1 0 010-1.414l.707-.707a1 1 0 11 1.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
