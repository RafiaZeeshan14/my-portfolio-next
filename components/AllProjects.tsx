"use client"

import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

const AllProjects: React.FC = () => {
  const projects = [
    {
      imageSrc: "/feeportal.jpeg",
      altText: "Student Fee Portal",
      title: "Student Dashboard",
      href: "https://finalhacakthon.vercel.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            As a frontend developer, I contributed to the creation of the
            Student Fee Portal during our web development project at SMIT.
          </p>
          <p className="mb-0.5">This platform provides:</p>
          <ul className="mb-4 list-disc pl-5">
            <li>
              <strong>Secure Fee Submission:</strong> Online payments integrated
              via Stripe.
            </li>
            <li>
              <strong>PDF Receipts:</strong> Downloadable for record-keeping.
            </li>
            <li>
              <strong>Student Dashboard:</strong> Access to payment history,
              receipt downloads, and profile management.
            </li>
            <li>
              <strong>Admin Dashboard:</strong> Insights into payments with
              interactive charts and detailed student management.
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
      ),
    },
    {
      imageSrc: "/ecom.jpeg",
      altText: "Ecommerce Website",
      title: "Ecommerce Website",
      href: "https://ecom-tshirt-store.vercel.app/",
      description: (
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
      ),
    },
    {
      imageSrc: "/BookStore.jpeg",
      altText: "BookStore",
      title: "BookStore",
      href: "https://bookstore-010.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            <strong>Firebase Bookstore:</strong> Dive into a curated collection
            of books, powered by Firebase Realtime Database. Read, explore, add
            and collect your favorites with ease. Join now and immerse yourself
            in a world of literary wonders.
          </p>
        </div>
      ),
    },
    // {
    //   imageSrc: "/blog.jpeg",
    //   altText: "Blog Website",
    //   title: "Blog Website",
    //   href: "https://yourthoughts-blogweb.vercel.app/",
    //   description: (
    //     <div className="text-sm">
    //       <p className="mb-2 ">
    //         Developed a comprehensive blog website using React.js and Tailwind
    //         CSS for the frontend, integrated with a backend to manage dynamic
    //         content. Users can create, edit, and delete their own blog posts
    //         through an intuitive interface. The site features a responsive
    //         layout with categorized posts and an easy-to-use navigation system.
    //         Backend integration supports allowing for personalized content
    //         management and seamless interaction. Designed with Tailwind CSS for
    //         a modern, adaptable look and optimized for various devices.
    //       </p>
    //     </div>
    //   ),
    // },
    {
      imageSrc: "/todo.jpeg",
      altText: "To-do List",
      title: "To-do List",
      href: "https://mytodo-app-01.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            <strong>TODO-APP :</strong> Stay organized with our todo
            application. Manage your tasks efficiently with features like task
            creation and completion tracking. Experience task management with
            our user-friendly interface.
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/clock.png",
      altText: "Digital Clock",
      title: "Digital Clock",
      href: "https://rafiazeeshan14.github.io/Digital-Clock/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Designed a sleek and functional digital clock using HTML and
            Tailwind CSS. The clock features a real-time display of hours,
            minutes, and seconds, with a modern and minimalist design. Leveraged
            Tailwind CSS to achieve a responsive and visually appealing
            interface, ensuring compatibility across various devices.
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/login.png",
      altText: "Login Page",
      title: "Login Page",
      href: "https://the-login-page-tailwind.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Experience seamless access with this stylish and user-friendly login
            form crafted using TailwindCSS. Enhance security and provide
            personalized user experiences with ease.{" "}
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/signin.png",
      altText: "Firebase Login Page",
      title: "Firebase Login/Signup Page",
      href: "https://login-form-firebase-auth.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Seamlessly register for exclusive access using Firebase
            Authentication. Sign up with ease and unlock personalized features
            tailored just for you. Join now and be part of our vibrant
            community.
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/adm.png",
      altText: "Admission Form",
      title: "Admission Form",
      href: "https://the-admission-form.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Designed a pixel-perfect admission form that combines aesthetics
            with functionality for a superior user experience.
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/reg.png",
      altText: "Registration Form",
      title: "Registration Form",
      href: "https://the-registration-form.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Seamlessly register your company with our custom-built form. Submit
            essential details for a registration process. Experience efficiency
            in registration like never before.{" "}
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/netflix.png",
      altText: "Netflix Clone",
      title: "Netflix Clone",
      href: "https://the-netflix-clone-01.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
            Experience streaming with this Netflix clone project. Explore a vast
            library of movies and TV shows, at your fingertips . Dive into
            entertainment and enjoy a world of cinematic delight.{" "}
          </p>
        </div>
      ),
    },
    {
      imageSrc: "/olx.png",
      altText: "Olx Clone",
      title: "Olx Clone",
      href: "https://the-olx-clone.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
          As a front-end developer, Ive brought to life a pixel-perfect replica of OLX, 
          showcasing my expertise in creating visually appealing and intuitive user interfaces.  </p>
        </div>
      ),
    },
    {
      imageSrc: "/fb.png",
      altText: "FB Clone",
      title: "FB Clone",
      href: "https://the-facebook-clone.netlify.app/",
      description: (
        <div className="text-sm">
          <p className="mb-2 ">
          My Facebook clone is more than just a project, its a showcase of my dedication to creating engaging and accessible web experiences  </p>
        </div>
      ),
    },
  ];

  return (
    <>
    <Navbar />
    <section
      id="all-projects"
      className="py-7 h-full w-full bg-[url('/Loop.png')] bg-repeat bg-center"
    >
      <div className="text-start pl-8 mb-5">
        <Link href="/" passHref>
          <p className="text-white flex items-center tracking-widest">
            <IoIosArrowBack className="mr-1" />
            <span className="">Back</span>
          </p>
        </Link>
      </div>
      <h2 className="text-white font-semibold text-center py-5 text-5xl sm:text-6xl pt-[35px]">
        ALL PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-7">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ amount: 0.1 }}
          >
            <ProjectCard
              imageSrc={project.imageSrc}
              altText={project.altText}
              title={project.title}
              href={project.href}
              description={project.description || "No description available"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  </>
  );
};

export default AllProjects;
