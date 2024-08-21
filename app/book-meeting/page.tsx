// ./app/book-meeting/page.tsx
"use client"

import React, { useState } from "react";
import { format } from "date-fns";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { DatePicker, TimePicker } from 'react-date-picker'; // Import necessary date and time picker components

export default function BookMeetingPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  // Handle time change
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  // Format date and time
  const formattedDate = date ? format(date, 'MMMM d, yyyy') : '';
  const formattedTime = time;

  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Book a Meeting
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a demo or consultation with us. Please select a date and time, and provide your details.
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
                    placeholder="Enter your full name"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    placeholder="Enter your email address"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-no"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Contact No.
                  </label>
                  <input
                    id="contact-no"
                    name="contact-no"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    placeholder="Enter your university or organization"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    placeholder="Enter your department"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    placeholder="Subject of the meeting"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Select a Date
                  </label>
                  <DatePicker
                    id="date"
                    onChange={handleDateChange}
                    value={date}
                    className="mt-2 w-full border border-gray-300 rounded-md shadow-sm"
                    format="y-MM-dd"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Select a Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={time}
                    onChange={handleTimeChange}
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="block text-lg font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={6}
                    required
                    placeholder="Provide additional details or questions here"
                    className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Book Meeting
                </button>
              </div>
            </form>

            <div className="mt-12 text-center">
              <h2 className="text-lg font-semibold text-gray-900">Meeting Details</h2>
              <p className="mt-2 text-base text-gray-600">
                Alfoze QOBE Demo
                <br />
                15 min
                <br />
                Web conferencing details will be provided upon confirmation.
              </p>
              <p className="mt-2 text-base text-gray-600">
                This will be a 30-55 minutes session including a demo followed by Q & A.
                <br />
                The online meeting link will be shared upon confirmation.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
