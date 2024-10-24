"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Experience: React.FC<{}> = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: detailsRef, inView: detailsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-10">
      <motion.h2
        className="text-white font-semibold text-center text-5xl sm:text-6xl pt-[45px]"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        EXPERIENCE
      </motion.h2>
      <motion.p
        className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl"
        ref={titleRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        EXPLORE NOW
      </motion.p>
      <div className="container mx-auto 2xl">
        <motion.div
          className="md:flex md:flex-row md:justify-between pt-5"
          ref={descriptionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: descriptionInView ? 1 : 0, y: descriptionInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src={"/People.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300">
              <Link href="https://www.packrit.com/" target="_blank" className="font-semibold hover:underline">Packr </Link>/ Front-End Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            March 2024 - July 2024, Karachi
          </p>
        </motion.div>

        <motion.p
          className="text-gray-300 pt-5 text-sm sm:text-base"
          ref={detailsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: detailsInView ? 1 : 0, y: detailsInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I started my journey as a Junior Front-End Developer at Team Fab,
          where I worked on developing full-stack websites, focusing solely on front-end development.
          I gained hands-on experience in building and optimizing user interfaces using modern frameworks and libraries
          like Chakra UI, Next.js, and Next UI. 
          My responsibilities included designing and developing fully responsive web 
          components that ensured a seamless user experience across all devices.
          <br />
          <br />
          As a Web Developer, I have gained strong command over front-end development. My experience has been rewarding, 
          allowing me to build dynamic and responsive web and mobile applications effectively.
        </motion.p>
        <motion.div
          className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max"
          ref={detailsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: detailsInView ? 1 : 0, y: detailsInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Next JS
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
