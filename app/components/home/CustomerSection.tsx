"use client";

import Image from "next/image";

const customerLogos = [
  {
    alt: "University of Excellence",
    src: "https://example.com/images/university-excellence-logo.svg",
  },
  {
    alt: "Global Tech University",
    src: "https://example.com/images/global-tech-university-logo.svg",
  },
  {
    alt: "Innovative Learning Institute",
    src: "https://example.com/images/innovative-learning-institute-logo.svg",
  },
  {
    alt: "Future Academy",
    src: "https://example.com/images/future-academy-logo.svg",
  },
  {
    alt: "Modern Learning Center",
    src: "https://example.com/images/modern-learning-center-logo.svg",
  },
];

export default function CustomerSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
          Trusted by Leading Educational Institutions
        </h2>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {customerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                alt={logo.alt}
                src={logo.src}
                width={158}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
