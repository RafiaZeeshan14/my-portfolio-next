"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[90px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <Image
            priority
            src="/Me.png"
            height={250}
            width={240}
            alt="Rafia Zeeshan"
            className="rounded-full h-[233px] w-[243px] shadow-glow bounce-slow"
          />
        </div>

        <div className="Main_Heading flex flex-col gap-6 mt-10 cursor-pointer  text-6xl sm:text-7xl    max-w-[600px] w-auto h-auto">
          Rafia Zeeshan!
        </div>
        <div className="flex justify-center">
          <p className="text-lg sm:text-2xl font-medium tracking-tight text-gray-300 max-w-[600px] fade-in-up">
            I do Code & Make Content About <br />         
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Web Design
            </span>
            <span className="text-transparent font-semibold bg-clip-text bg-white mx-2">
              &
            </span>
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Development
            </span>
          </p>
        </div>

        <p className="text-md text-gray-200 my-5 max-w-[600px] fade-in-up">
          CS student and aspiring web developer specializing in the MERN stack,
          passionate about building dynamic and responsive web and mobile
          applications with MongoDB, Express, React, and Node.js
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:rafiazeeshan214@gmail.com")}
            className="z-[1] padding-20 hover:bg-black rounded-3xl text-black font-semibold bg-white hover:text-white py-3 px-10 border-[0.1px] border-white hover:border-white"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
