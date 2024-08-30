
"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC<{}> = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden py-10"
      style={{ transform: "scale(0.9)" }}
      ref={ref}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px] pt-[45px]">
        <motion.h1
          className="text-white font-semibold text-6xl"
          initial="hidden"
          animate={controls}
          variants={slideLeft}
        >
          ABOUT ME
        </motion.h1>

        <motion.p
          className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl"
          initial="hidden"
          animate={controls}
          variants={slideRight}
        >
          EXPLORE NOW
        </motion.p>

        <motion.p
          className="text-gray-300 text-center"
          initial="hidden"
          animate={controls}
          variants={slideLeft}
        >
          As a CS student with a deep passion for software development, I am
          currently focused on mastering the MERN stack. My journey in the tech
          world includes hands-on experience with MongoDB, Express, React, and
          Node.js, allowing me to craft dynamic and responsive web applications.
          <br />
          <br />
          In my current role, I am immersed in the world of web development,
          where I leverage my skills to craft elegant and innovative solutions.
          I thrive on translating complex concepts into intuitive user
          experiences, constantly pushing the boundaries of what&#39;s possible
          in software development.
        </motion.p>

        <motion.div
          className="text-md flex justify-center py-4"
          initial="hidden"
          animate={controls}
          variants={slideRight}
        >
          <button className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent">
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
