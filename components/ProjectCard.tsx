import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, altText, title, href }) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg  ">
      {/* Image section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full object-cover bg-no-repeat h-64"
          width={300}
          height={256}
        />
      </div>

      {/* Link section */}
      <Link
        href={href}
        className="bg-gray-800 hover:bg-gray-700 duration-300 p-4 flex justify-between items-center text-white"
      >
        <div>
          <p className="text-[10px]">CLICK HERE TO VISIT</p>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <span className="text-xl -rotate-45">&#8594;</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
