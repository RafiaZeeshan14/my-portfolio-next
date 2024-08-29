import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 bg-black">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <Link href='/allprojects'>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE MORE <span className="text-xl ">&#8594;</span>
      </p>
      </Link>
      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto 2xl">
        {/* ProjectCard components */}
        <ProjectCard
          imageSrc="/feeportal.jpeg"
          altText="Student Fee Portal"
          title="Student Dashboard"
          href="/"
         
        />
        <ProjectCard
          imageSrc="/ecom.jpeg"
          altText="Ecommerce Website"
          title="Ecommerce Website"
          href="/"
         
        />
      </div>
    </section>
  );
};

export default Projects;

