"use client"
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="projects" className="py-10">
      <motion.h2
        className="text-white font-semibold text-center text-5xl sm:text-6xl pt-[35px]"
        ref={sectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : -50 }}
        transition={{ duration: 0.6 }}
      >
        PROJECTS
      </motion.h2>
      <Link href="/allprojects">
        <motion.p
          className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl"
          ref={sectionRef}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : -30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          EXPLORE MORE <span className="text-xl ">&#8594;</span>
        </motion.p>
      </Link>
      {/* Card Container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto 2xl"
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* ProjectCard components */}
        <ProjectCard
          imageSrc="/feeportal.jpeg"
          altText="Student Fee Portal"
          title="Student Dashboard"
          href="https://finalhacakthon.vercel.app/"
          description={
            <>
              <div className="text-sm">
                <p className="mb-2 ">
                  As a frontend developer, I contributed to the creation of the
                  Student Fee Portal during our web development project at SMIT.
                </p>
                <p className="mb-0.5">This platform provides:</p>
                <ul className="mb-4 list-disc pl-5">
                  <li>
                    <strong>Secure Fee Submission:</strong> Online payments
                    integrated via Stripe.
                  </li>
                  <li>
                    <strong>PDF Receipts:</strong> Downloadable for
                    record-keeping.
                  </li>
                  <li>
                    <strong>Student Dashboard:</strong> Access to payment
                    history, receipt downloads, and profile management.
                  </li>
                  <li>
                    <strong>Admin Dashboard:</strong> Insights into payments
                    with interactive charts and detailed student management.
                  </li>
                </ul>
                <p className="font-bold mb-2 text-gray-300">Technology Stack:</p>
                <ul className="mb-4 list-disc pl-5">
                  <li>
                    <strong>Frontend:</strong> React, Tailwind CSS, Formik
                  </li>
                  <li>
                    <strong>Backend:</strong> Express.js, MongoDB, JWT
                  </li>
                  <li>
                    <strong>Graphs:</strong> Chart.js
                  </li>
                </ul>
                <p className="font-bold mb-2 text-gray-300">Explore More:</p>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Stripe Test Payment:</strong>
                    <p>Card: 4242 4242 4242 4242</p>
                    <p>Expiry: 12/34</p>
                    <p>CVC: 567.</p>
                  </li>
                  <li>
                    <strong>Admin Login:</strong> admin@gmail.com / admin123
                  </li>
                </ul>
              </div>
            </>
          }
        />

        <ProjectCard
          imageSrc="/ecom.jpeg"
          altText="Ecommerce Website"
          title="Ecommerce Website"
          href="https://ecom-tshirt-store.vercel.app/"
          description={
          <>
           <div className="text-sm">
          <p className="mb-2 ">
            Developed a dynamic and responsive e-commerce website using React.js
            and Tailwind CSS. The project features a user-friendly interface
            with product cards, detailed product pages, and a shopping cart
            system. Implemented a clean, modern design with Tailwind CSS for
            styling, ensuring a seamless and visually appealing shopping
            experience across various devices.
          </p>
        </div>
          </>}
        />
      </motion.div>
    </section>
  );
};

export default Projects;

