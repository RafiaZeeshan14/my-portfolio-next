"use client"


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSun, FaTimes, FaArrowUp } from 'react-icons/fa'; 
import { IoFilter } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`sticky top-0 z-50 py-4 text-white transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-60' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Navbar content (logo, links, icons) */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <img src="/Logo.png" alt="Rafia" className="h-8" />
            <span className='flex-col flex ml-3'>
              <span className="text-md font-bold tracking-wider">Rafia</span>
              <span className="text-xs font-light tracking-widest ml-4">ZEESHAN</span>
            </span>
          </Link>
        </div>
        {/* Middle section: Links */}
        <div className={`hidden sm:flex space-x-6 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
          <Link href="#about" className="hover:text-gray-400 tracking-widest">
            ABOUT
          </Link>
          <Link href="#projects" className="hover:text-gray-400 tracking-widest">
            WORK
          </Link>
          <Link href="#experience" className="hover:text-gray-400 tracking-widest">
            EXPERIENCE
          </Link>
          <Link href="#contact" className="hover:text-gray-400 tracking-widest">
            CONTACT
          </Link>
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.linkedin.com/in/rafia-zeeshan/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/RafiaZeeshan14" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </Link>
          <button className="hover:text-gray-400">
            <FaSun />
          </button>
          <button className="sm:hidden p-0.5 hover:text-gray-400" onClick={() => setIsNavOpen(!isNavOpen)}>
            <IoFilter size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isNavOpen ? 'block' : 'hidden'} bg-black bg-opacity-60 fixed inset-0 pt-16 text-sm left-0 z-40 flex flex-col items-center`}>
        <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setIsNavOpen(false)}>
          <FaTimes />
        </button>
        <Link href="#about" className="py-3 text-white hover:text-gray-400 tracking-widest" onClick={() => setIsNavOpen(false)}>
          ABOUT
        </Link>
        <Link href="#projects" className="py-3 text-white hover:text-gray-400 tracking-widest" onClick={() => setIsNavOpen(false)}>
          WORK
        </Link>
        <Link href="#experience" className="py-3 text-white hover:text-gray-400 tracking-widest" onClick={() => setIsNavOpen(false)}>
          EXPERIENCE
        </Link>
        <Link href="#contact" className="py-3 text-white hover:text-gray-400 tracking-widest" onClick={() => setIsNavOpen(false)}>
          CONTACT
        </Link>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
       <button
       onClick={scrollToTop}
       className="fixed bottom-8 right-8 p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 hover:border hover:border-gray-500 hover:shadow-xl transition duration-300 ease-in-out"
     >
       <FaArrowUp />
     </button>
     
      )}
    </nav>
  );
};

export default Navbar;
