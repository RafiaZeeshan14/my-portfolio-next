"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BsFillPeopleFill,
  BsGearWideConnected,
  BsGlobe2,
  BsListTask,
  BsPersonFillGear,
} from 'react-icons/bs';
import { ImChrome } from 'react-icons/im';

// Define the type for ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;  // Specify that 'icon' is a React node
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="w-full flex mb-5"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <span className="mt-3 text-white">{icon}</span>
      <div className="p-3 w-full">
        <p className="text-white font-semibold text-xl">{title}</p>
        <p className="text-gray-400 text-[14px]">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: subheadingRef, inView: subheadingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Animation variants for heading and subheading
  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] py-10"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        {/* Animated Heading */}
        <motion.h1
          className="text-white font-semibold text-5xl sm:text-6xl"
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          SERVICES
        </motion.h1>
        {/* Animated Subheading */}
        <motion.p
          className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl"
          ref={subheadingRef}
          variants={subheadingVariants}
          initial="hidden"
          animate={subheadingInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SEE BELOW
        </motion.p>
      </div>

      <div className="container mx-auto 2xl">
        <div className="grid md:grid-cols-2 gap-8 mt-7">
          <ServiceCard
            icon={<BsGlobe2 size={50} />}
            title="RESPONSIVE DESIGN"
            description="Transforming your ideas into fully responsive websites that provide an optimal viewing experience across a wide range of devices. I prioritize seamless navigation, intuitive layouts, and striking visuals to capture user’s attention."
            delay={0.2}
          />
          <ServiceCard
            icon={<BsFillPeopleFill size={50} />}
            title="USER INTERFACE (UI)"
            description="Designing and implementing captivating user interfaces that enhance user engagement and satisfaction. I focus on creating interfaces that guide users through your website’s functionalities with ease."
            delay={0.4}
          />
          <ServiceCard
            icon={<BsGearWideConnected size={50} />}
            title="PERFORMANCE OPTIMIZATION"
            description="Improving the speed and performance of your website to minimize loading times and create a smooth browsing experience. I utilize best practices in coding and optimization techniques to enhance overall site performance."
            delay={0.6}
          />
          <ServiceCard
            icon={<ImChrome size={50} />}
            title="CROSS-BROWSER COMPATIBILITY"
            description="Ensuring your website looks and functions consistently across different browsers, ensuring a seamless experience for every visitor. I conduct rigorous testing to identify and resolve any compatibility issues."
            delay={0.8}
          />
          <ServiceCard
            icon={<BsListTask size={50} />}
            title="INTERACTIVE COMPONENTS"
            description="Integrating interactive elements such as animations, sliders, and dynamic content to make your website engaging and memorable. These components not only capture attention but also communicate your brand message effectively."
            delay={1.0}
          />
          <ServiceCard
            icon={<BsPersonFillGear size={50} />}
            title="MAINTENANCE & SUPPORT"
            description="Providing ongoing support to keep your website up to date, secure, and functioning flawlessly. Whether it’s routine updates or troubleshooting, I’m dedicated to ensuring your online presence remains in top condition."
            delay={1.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

