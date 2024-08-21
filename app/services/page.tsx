// pages/services.tsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              At UniLearn, we offer a range of comprehensive services designed to
              meet the diverse needs of educational institutions. Our solutions are
              tailored to enhance the learning experience and streamline
              administrative processes.
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Course Management
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Efficiently manage and organize your course offerings, including
                  curriculum design, scheduling, and student enrollment.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Assignment Submission
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Simplify the assignment submission process with our user-friendly
                  interface, enabling seamless collection and management of student
                  work.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Online Quizzes
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Create and administer online quizzes to assess student
                  understanding of course materials with ease and efficiency.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Rubric-Based Assessment
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Use customizable rubrics to ensure consistent and objective
                  grading of student work, improving assessment reliability.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Outcomes Management
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Track and analyze student outcomes to ensure that your curriculum
                  meets its educational goals and standards.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Skills-Based Transcripts
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Showcase students skills and achievements with detailed,
                  skills-based transcripts that highlight their competencies.
                </p>
              </div>

              <div className="flex flex-col rounded-lg bg-white shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Continuous Quality Improvement
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Leverage data-driven insights and analytics to continuously
                  improve your curriculum and educational programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
