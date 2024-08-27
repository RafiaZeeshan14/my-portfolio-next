import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSun } from 'react-icons/fa';

const Navbar: React.FC<{}> = () => {
  return (
    <nav className=" text-white py-4">
      <div className="container mx-auto  flex justify-between items-center px-4">
        {/* Left section: Logo */}
          {/* Left section: Logo and Names */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex  items-center">
              <img src="/Logo.png" alt="Rafia" className="h-8" /> 
            <span className='flex-col flex ml-3'>
              <span className="text-md font-bold tracking-wider">Rafia</span>
              <span className="text-xs font-light tracking-widest ml-4">ZEESHAN</span>
            </span>
            </Link>
        </div>

        {/* Middle section: Links */}
        <div className="hidden md:flex space-x-6 text-sm ">
          <Link href="/About" className="hover:text-gray-400 tracking-widest ">
            ABOUT
          </Link>
          <Link href="/work" className="hover:text-gray-400 tracking-widest ">
            WORK
          </Link>
          <Link href="/notebook" className="hover:text-gray-400 tracking-widest ">
           EXPERIENCE
          </Link>
          <Link href="/contact" className="hover:text-gray-400 tracking-widest ">
            CONTACT
          </Link>
        </div>

        {/* Right section: Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </Link>
          <button className="hover:text-gray-400">
            <FaSun />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
