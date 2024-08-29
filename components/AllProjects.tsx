import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const AllProjects: React.FC = () => {
  const projects = [
    {
      imageSrc: "/feeportal.jpeg",
      altText: "Student Fee Portal",
      title: "Student Dashboard",
      href: "/",
    },
    {
      imageSrc: "/ecom.jpeg",
      altText: "Ecommerce Website",
      title: "Ecommerce Website",
      href: "/",
    },
    {
      imageSrc: "/BookStore.jpeg",
      altText: "BookStore",
      title: "BookStore",
      href: "/",
    },
    {
      imageSrc: "/blog.jpeg",
      altText: "Blog Website",
      title: "Blog Website",
      href: "/",
    },
    {
      imageSrc: "/todo.jpeg",
      altText: "To-do List",
      title: "To-do List",
      href: "/",
    },
  
  ];

  return (
    <>
      <Navbar />
    
      <section id="all-projects" className="py-7 bg-black">
      <div className="text-start pl-8 mb-5">
      <Link href="/" passHref>
        <p className="text-white flex items-center">
          <FaArrowLeft className="mr-2" /> 
          <span className="underline">Back</span>
        </p>
      </Link>
    </div>
        <h2 className="text-white font-semibold text-center py-5 text-6xl pt-[35px]">
          ALL PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-7 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              altText={project.altText}
              title={project.title}
              href={project.href}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProjects;
