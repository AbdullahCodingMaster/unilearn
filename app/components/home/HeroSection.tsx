"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-gray-100 relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Empowering Educational Excellence with UniLearn
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            UniLearn streamlines learning management with advanced tools for
            outcomes management, assessment, and student engagement. Transform
            your educational environment with a unified platform designed for
            modern academic needs.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              href="/book-meeting"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Meeting
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
