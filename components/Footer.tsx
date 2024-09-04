"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer className="bg-[#2E2E2E] text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        {/* Profile Circle */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-full w-12 h-12 flex items-center justify-center text-xl">
            R
          </div>
        </div>

        {/* Heading with Animation */}
        <motion.h2
          ref={headingRef}
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: headingInView ? 1 : 0,
            y: headingInView ? 0 : -30,
          }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
        >
          {"Lets Connect !".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: headingInView ? 1 : 0,
                y: headingInView ? 0 : -30,
              }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <p className="text-gray-400 mt-2">
          I am always open to discuss your project, improve your online presence
          or help with your UI/UX design.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link
            href="https://www.facebook.com/rafia.altitudeheight"
            target="_blank"
            className="text-gray-400 hover:text-white border rounded-full p-2 hover:border-gray-400"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rafia-zeeshan/"
            target="_blank"
            className="text-gray-400 hover:text-white border rounded-full p-2 hover:border-gray-400"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/RafiaZeeshan14"
            target="_blank"
            className="text-gray-400 hover:text-white border rounded-full p-2 hover:border-gray-400"
          >
            <FaGithub />
          </Link>
          <Link
            href="#"
            onClick={() => window.open("mailto:rafiazeeshan214@gmail.com")}
            target="_blank"
            className="text-gray-400 hover:text-white border rounded-full p-2 hover:border-gray-400"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
