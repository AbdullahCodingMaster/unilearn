"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              If you have business inquiries or other questions, please fill out
              the following form to contact us. Thank you.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-no"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Contact No. / WhatsApp No.
                  </label>
                  <input
                    id="contact-no"
                    name="contact-no"
                    type="tel"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="university"
                    className="block text-lg font-medium text-gray-900"
                  >
                    University/Organization
                  </label>
                  <input
                    id="university"
                    name="university"
                    type="text"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="University of Example"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Department
                  </label>
                  <input
                    id="department"
                    name="department"
                    type="text"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Department of Computer Science"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Request for a Demo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Body
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={6}
                    required
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Please provide details about your request or inquiry."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
