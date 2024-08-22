"use client";

import Image from "next/image";
import { FC } from "react";

// Updated TeamMember type to use images
type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

// Updated teamMembers array with image URLs
const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Abdullah Awan",
    role: "Founder & CEO",
    description:
      "Muhammad Abdullah Awan is the visionary behind UniLearn, dedicated to enhancing educational management through innovative technology.",
    image: "/images/muhammad-abdullah-awan.jpg", // Replace with actual image path
  },
  {
    name: "Umair Imtiaz",
    role: "Lead Developer",
    description:
      "Umair is the lead developer at UniLearn, responsible for shaping the platform's core features and ensuring its technical excellence.",
    image: "/images/umair-imtiaz.jpg", // Replace with actual image path
  },
  {
    name: "Hassan Ali",
    role: "Product Manager",
    description:
      "Hassan manages the product lifecycle and coordinates between teams to ensure UniLearn meets user needs and market demands.",
    image: "/images/hassan-ali.jpg", // Replace with actual image path
  },
  {
    name: "Hashaam Ahmed",
    role: "UI/UX Designer",
    description:
      "Hashaam designs user interfaces that are intuitive and engaging, ensuring a seamless user experience on the UniLearn platform.",
    image: "/images/hashaam-ahmed.jpg", // Replace with actual image path
  },
];

const TeamSection: FC = () => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Meet Our Team
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The people behind UniLearn
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team is composed of passionate individuals dedicated to
            revolutionizing educational management and making a positive impact
            on learning processes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="relative p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-gray-300 border border-transparent"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-gray-200"
                  />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900 text-center">
                  {member.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-center">
                  <strong className="text-gray-900">{member.role}</strong>
                  <p>{member.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
