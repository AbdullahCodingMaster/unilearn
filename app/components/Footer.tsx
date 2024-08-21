"use client";

import Link from "next/link";
import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">UniLearn</h2>
            <nav className="flex flex-col space-y-3 lg:space-y-2 lg:space-x-4 lg:flex-row">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-2">123 UniLearn St, Suite 100</p>
            <p className="text-sm mb-2">City, Country 12345</p>
            <p className="text-sm mb-2">Email: contact@unilearn.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebookF className="h-7 w-7" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedinIn className="h-7 w-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} UniLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
