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
    visible: { opacity: 1, y: 0 }, 
  };

  // Use the useInView hook to trigger animations when in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time it comes into view
    threshold: 0.2, 
  });

  return (
    <div>
      <motion.section
        ref={ref}
        id="tech"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[45px] py-10"
        style={{ transform: "scale(0.9)" }}
        variants={sectionVariants} 
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
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
            <div className="grid grid-cols-4 gap-10 sm:flex cursor-pointer">
              {[
                { name: "html", tooltip: "HTML" },
                { name: "css", tooltip: "CSS" },
                { name: "Bootstrap", tooltip: "Bootstrap" },
                { name: "tailwind", tooltip: "Tailwind CSS" },
                { name: "ChakraUI", tooltip: "Chakra UI" },
                { name: "figma", tooltip: "Figma" },
                { name: "JS", tooltip: "JavaScript" },
                { name: "TS", tooltip: "TypeScript" },
              ].map((tech, index) => (
                <motion.img
                  key={tech.name}
                  src={`/${tech.name}.png`}
                  alt={tech.name}
                  className="h-12 sm:h-14"
                  title={tech.tooltip}
                  variants={iconVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-[42px] h-auto py-2 mx-2">
            <div className="grid grid-cols-4 gap-[45px] sm:flex cursor-pointer">
              {[
                { name: "Nodejs", tooltip: "Node.js" },
                { name: "react", tooltip: "React" },
                { name: "mongoDB", tooltip: "MongoDB" },
                { name: "ex", tooltip: "Express.js" },
                { name: "nextjs", tooltip: "Next.js" },
                { name: "NextUI", tooltip: "Next UI" },
                { name: "Git", tooltip: "Git" },
                { name: "firebase", tooltip: "Firebase" },
              ].map((tech, index) => (
                <motion.img
                  key={tech.name}
                  src={`/${tech.name}.png`}
                  alt={tech.name}
                  className="h-12 sm:h-14"
                  title={tech.tooltip} 
                  variants={iconVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
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
