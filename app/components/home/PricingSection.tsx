"use client";

import { FaCheck } from "react-icons/fa";

const includedFeatures = [
  "Outcomes Management",
  "Rubric Based Assessment",
  "Indirect Assessment",
  "Assignment Submission",
  "Online Quiz",
  "Section Teaching Plan",
  "Continuous Quality Improvement",
  "Skills Based Transcript",
  "CGPA Support",
  "Multiple Campus Management",
  "SaaS Based Access",
  "Knowledge Management",
];

export default function PricingSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple and Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At UniLearn, we offer a straightforward pricing model that covers
            all essential features for managing your learning programs
            effectively. No hidden fees or complex terms—just a clear,
            comprehensive solution for your educational needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:shadow-lg lg:ring-0">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Annual Subscription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Gain access to UniLearn’s full suite of features with our annual
              subscription plan. Designed to help you efficiently manage your
              educational programs with ease.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s Included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-x-3 transition-transform transform hover:scale-105"
                >
                  <FaCheck
                    aria-hidden="true"
                    className="h-6 w-6 flex-none text-indigo-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-white py-10 text-center ring-1 ring-gray-200 shadow-lg lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, enjoy unlimited access
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $399
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors duration-300"
                >
                  Get Access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts are available for easy company
                  reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
