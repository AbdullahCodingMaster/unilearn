"use client";

import { FaRocket, FaLock, FaDatabase, FaShieldAlt } from "react-icons/fa";
import React from "react";

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    name: "Outcomes Management",
    description:
      "UniLearn helps you track and analyze student outcomes to ensure your curriculum is meeting its goals.",
    icon: FaRocket,
  },
  {
    name: "Rubric Based Assessment",
    description:
      "Easily assess student work with customizable rubrics to ensure consistent and objective grading.",
    icon: FaLock,
  },
  {
    name: "Indirect Assessment",
    description:
      "Get a comprehensive view of student learning through indirect assessments such as surveys, focus groups, and interviews.",
    icon: FaDatabase,
  },
  {
    name: "Assignment Submission",
    description:
      "Streamline your assignment submission process with UniLearn’s easy-to-use interface.",
    icon: FaShieldAlt,
  },
  {
    name: "Online Quiz",
    description:
      "Create and administer online quizzes to assess student understanding of course materials.",
    icon: FaRocket,
  },
  {
    name: "Section Teaching Plan",
    description:
      "Plan your course sections with ease using UniLearn’s intuitive teaching plan feature.",
    icon: FaLock,
  },
  {
    name: "Continuous Quality Improvement",
    description:
      "Continuously improve your curriculum with UniLearn’s data-driven insights and analytics.",
    icon: FaDatabase,
  },
  {
    name: "Skills Based Transcript",
    description:
      "Showcase your students’ skills and achievements with UniLearn’s skills-based transcript feature.",
    icon: FaShieldAlt,
  },
  {
    name: "CGPA Support",
    description:
      "Calculate and track student CGPAs with UniLearn’s intuitive tools and features.",
    icon: FaRocket,
  },
  {
    name: "Multiple Campus",
    description:
      "Easily manage multiple campus locations with UniLearn’s centralized platform.",
    icon: FaLock,
  },
  {
    name: "SaaS Based",
    description:
      "Access UniLearn from anywhere with our cloud-based, Software as a Service (SaaS) platform.",
    icon: FaDatabase,
  },
  {
    name: "Knowledge Management",
    description:
      "Keep all your course materials and resources organized with UniLearn’s powerful knowledge management tools.",
    icon: FaShieldAlt,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            UniLearn Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All the tools you need to manage your learning cycle
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With UniLearn, you can streamline your learning management processes
            and enhance the effectiveness of your learning programs. Our
            easy-to-use platform ensures that you can manage your learning
            programs effortlessly, saving you time and resources.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md">
                  <feature.icon aria-hidden="true" className="h-8 w-8" />
                </div>
                <div className="ml-16">
                  <dt className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
