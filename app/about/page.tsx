// pages/about.tsx

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
    <Header />
    <main>
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Welcome to UniLearn, a comprehensive platform designed to streamline the complete learning management cycle. Our mission is to enhance the effectiveness of learning programs and simplify learning management processes for educational institutions.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Founded by Muhammad Abdullah Awan, UniLearn is dedicated to providing a robust and user-friendly system for managing courses, assignments, assessments, and more. Our goal is to support educational institutions in delivering a seamless learning experience and achieving their educational objectives.
        </p>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Our Founder</h2>
          <p className="mt-4 text-base leading-6 text-gray-600">
            Muhammad Abdullah Awan, the founder and CEO of UniLearn, is a passionate advocate for educational technology. With a vision to transform learning management, he has dedicated his expertise to creating solutions that empower educators and students alike.
          </p>
        </div>
      </div>
    </div>
    </main>
    <Footer />
    </>
  );
}
