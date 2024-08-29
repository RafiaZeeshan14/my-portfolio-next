
"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './Modal';

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  href: string;
  description: React.ReactNode; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, altText, title, href, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
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
      <div
        onClick={openModal}
        className="bg-gray-800 hover:bg-gray-700 duration-300 p-4 flex justify-between items-center text-white cursor-pointer"
      >
        <div>
          <p className="text-[10px]">CLICK HERE TO VISIT</p>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <span className="text-xl -rotate-45">&#8594;</span>
        
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        description={description}
        projectLink={href}
      />
    </div>
  );
};

export default ProjectCard;






