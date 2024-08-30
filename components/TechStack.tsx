"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechStack: React.FC<{}> = () => {
  // Define animation variants for the icons and section
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with downward offset
    visible: { opacity: 1, y: 0 }, // Fade in and move up to normal position
  };

  // Use the useInView hook to trigger animations when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time it comes into view
    threshold: 0.2, // 20% of the section needs to be visible to trigger
  });

  return (
    <div>
      <motion.section
        ref={ref} // Attach the ref to the section
        id="tech"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[45px] py-10"
        style={{ transform: "scale(0.9)" }}
        variants={sectionVariants} // Apply fade-up variants to the section
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Trigger animation based on inView
        transition={{ duration: 0.8 }} // Duration of the fade-up effect
      >
        <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
          <h1 className="text-white font-semibold text-5xl sm:text-6xl">
            TECH STACK
          </h1>
          <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
            SEE BELOW
          </p>
          <div className="flex gap-10 h-auto py-7 mx-2">
            <div className="grid grid-cols-4 gap-10 sm:flex">
              {["html", "css", "Bootstrap", "tailwind", "ChakraUI", "figma", "JS", "TS"].map((tech, index) => (
                <motion.img
                  key={tech}
                  src={`/${tech}.png`}
                  alt={tech}
                  className="h-14"
                  variants={iconVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Animate based on visibility
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-[42px] h-auto py-2 mx-2">
            <div className="grid grid-cols-4 gap-[42px] sm:flex">
              {["Nodejs", "react", "mongoDB", "ex", "nextjs", "NextUI", "Git", "firebase"].map((tech, index) => (
                <motion.img
                  key={tech}
                  src={`/${tech}.png`}
                  alt={tech}
                  className=" h-14"
                  variants={iconVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Animate based on visibility
                  transition={{ delay: (index + 8) * 0.2, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TechStack;
