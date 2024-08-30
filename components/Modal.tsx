import React from 'react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: React.ReactNode;
  projectLink: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, description, projectLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-black p-8 rounded-2xl border border-gray-600 shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <div className="flex flex-col items-start">
            <h1 className='font-bold text-xl py-2'>Project Description : </h1>
          <div className="text-gray-200 mb-4">{description}</div>
          <Link href={projectLink} target='_blank'>
            <p className="text-blue-500 underline">Visit Project</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;


