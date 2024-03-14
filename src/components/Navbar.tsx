"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-full m-5 flex justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logoSombre.png" width={50} height={50} alt="Logo" />
          </Link>
        </div>
        <div className="bg-white rounded-full mr-20 flex items-center shadow-xl px-2">
          <div className="flex space-x-4">
            <Link href="/" className="hover:bg-gray-200 hover:font-semibold px-3 py-2 rounded-full">
              Accueil
            </Link>
            <Link href="/services" className="hover:bg-gray-200 hover:font-semibold px-3 py-2 rounded-full">
              Services
            </Link>
            <Link href="/developer" className="hover:bg-gray-200 hover:font-semibold px-3 py-2 rounded-full">
              Developpeurs
            </Link>
            <Link href="/contact" className="hover:bg-gray-200 hover:font-semibold px-3 py-2 rounded-full">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Volet latéral pour les petits écrans */}
      <div
        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed inset-y-0 right-0 z-50 w-3/4 bg-gray-800 transition duration-300 ease-in-out md:hidden`}
      >
        <div className="px-4 py-6">
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;