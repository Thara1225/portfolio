'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm ";
  const name = "Tharasari Rajapaksha";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 min-h-[1.2em]">
          {displayedText}
          {displayedText === fullText && (
            <span className="text-blue-400 animate-fade-in">{name}</span>
          )}
          {displayedText && displayedText !== fullText && (
            <span className="inline-block w-1 h-16 bg-blue-400 animate-pulse ml-1"></span>
          )}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
         Software Engineering undergraduate 
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '1.7s'}}>
I build practical and user-friendly software using modern tools. Currently expanding my skills in backend development, UI design, and secure application development with Java, C++, React, and MySQL
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{animationDelay: '1.9s'}}>
          <a 
            href="#projects" 
            className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-slate-600 text-gray-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-slate-800 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
