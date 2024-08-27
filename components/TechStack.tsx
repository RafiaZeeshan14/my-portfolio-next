import Image from "next/image";
import React from "react";
import { ImGooglePlus } from "react-icons/im";

const TechStack: React.FC<{}> = () => {
  return (
    <div>
      <section
        id="tech"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
        style={{ transform: "scale(0.9" }}
      >
        <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
          <h1 className="text-white font-semibold text-5xl sm:text-6xl"> TECH STACK</h1>
          <p className=" tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            SEE BELOW
          </p>
          <div className="flex gap-10 h-auto py-7">
            <div className="grid grid-cols-4  gap-10 sm:flex ">
            <img src="/html.png" alt="html" className="w-14 h-16" />
            <img src="/css.png" alt="css" className="w-14 h-16" />
            <img src="/Bootstrap.png" alt="boostrap" className="w-16 h-16" />
            <img src="/tailwind.png" alt="react" className="h-10 mt-2 " />
            <img src="/ChakraUI.png" alt="Chakra" className="h-12 mt-2 " />
            <img src="/figma.png" alt="react" className="h-12 mt-2 " />
            <img src="/JS.png" alt="js" className="w-16 h-16" />
            <img src="/TS.png" alt="ts" className="w-16 h-16" />
            </div>
          </div>
          <div className="flex gap-[42px] h-auto py-2">
            <div className="grid grid-cols-4  gap-[42px] sm:flex">

            <img src="/Nodejs.png" alt="node" className="w-14 h-16" />
            <img src="/react.png" alt="react" className="" />
            <img src="/mongoDB.png" alt="boostrap" className=" h-16" />
            <img src="/ex.png" alt="express" className="w-14 h-14" />
            <img src="/nextjs.png" alt="ts" className="w-16 h-16" />
            <img src="/NextUI.png" alt="NextUI" className="w-16 h-16" />
            <img src="/git.png" alt="git" className="h-12 mt-2 " />
            <img src="/firebase.png" alt="firebase" className="h-14 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
