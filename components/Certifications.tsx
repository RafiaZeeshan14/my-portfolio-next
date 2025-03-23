"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Certifications: React.FC<{}> = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-10">
      <motion.h2
        className="text-white font-semibold text-center text-4xl sm:text-6xl pt-[45px]"
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        CERTIFICATIONS
      </motion.h2>
      <motion.p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </motion.p>
      <div className="container  mx-auto 2xl">
        <div className="flex-col grid grid-cols-1 sm:grid-cols-2 flex md:flex-row gap-6 mt-7">

          {/* Freelance Certificate */}
          <motion.div
            className="flex-row flex mb-5"
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/certificate.jpeg" target="_blank" className="z-[1]">
              <div className="flex-row flex">
                <Image
                  src="/certificate.jpeg"
                  height={150}
                  width={150}
                  alt="Certificate"
                />
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">
                    Freelance Certificate
                  </p>
                  <p className="text-gray-500 text-[10px]">
                    Successfully completed a comprehensive freelancing course, gaining skills
                    and knowledge to excel in the freelancing industry. This certification
                    has equipped me with the tools to effectively manage projects,
                    communicate with clients, and deliver high-quality work.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Cisco Certificate */}
          <motion.div
            className="flex-row flex mb-5"
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/cisco2.jpeg" target="_blank" className="z-[1]">
              <div className="flex-row flex">
                <Image
                  src="/cisco2.jpeg"
                  height={150}
                  width={150}
                  alt="Certificate"
                />
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">
                    Cisco Certificate
                  </p>
                  <p className="text-gray-500 text-[10px]">
                    Completed a Cisco networking course, acquiring in-depth knowledge of network configuration,
                    troubleshooting, and security. This certification has provided me with essential skills to design,
                    implement, and manage secure and efficient network infrastructures.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* SMIT Web and App Development Certificate (In Process) */}
          <motion.div
            className="flex-row flex mb-5"
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/web-dev.png" target="_blank" className="z-[1]">
              <div className="flex-row flex">
                <Image
                  src="/web-dev.png" 
                  height={150}
                  width={150}
                  alt="web development certificate"
                />
                <div className="p-3">
                  <p className="text-white font-semibold text-xl">
                    Web & App Development
                  </p>
                  <p className="text-gray-500 text-[10px]">
                    Completed a web and app development course from SMIT.The course equipped me with
                    key skills in modern web technologies, including React, Node.js, and Express.js.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Certifications;
